export {};

const chokidar = require('chokidar');
const color = require('picocolors');
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const sass = require('sass');

const parser = require('./parser');
const ver = require('../package.json').version;

const sheetloaf = new Command();
let postcssConfig = {
	plugins: []
};
let usingStdin: boolean = false;

sheetloaf.version(ver, '-v, --version', 'Print the version of Sheetloaf.');
sheetloaf
	.arguments('[sources...]')
	.description('🍖 Compile Sass to CSS and transform the output using PostCSS all in one command.')
	.action((source) => {
		if (source.length > 0) {
			// If source is provided, we ignore pipes.
			init(source);
		} else if (!process.stdin.isTTY) {
			// see github.com/tj/commander.js/issues/137
			let stdin = '';
			process.stdin.on('readable', function () {
				var chunk = this.read();
				if (chunk !== null) {
					stdin += chunk;
				}
			});
			process.stdin.on('end', function () {
				usingStdin = true;
				init(stdin);
			});
		}
	});

sheetloaf
	.option('-o, --output <LOCATION>', 'Output file.')
	.option('--dir <LOCATION>', 'Output directory.')
	.option(
		'--base <DIR>',
		'Mirror the directory structure relative to this path in the output directory, for use with --dir.',
		''
	)
	.option('--ext <EXTENSION>', 'Override the output file extension; for use with --dir', '.css')
	.option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
	.option('--source-map', 'Generate a source map (this is the default option).')
	.option('--no-source-map', 'Do not generate a source map.')
	.option(
		'--embed-source-map',
		'Embed the contents of the source map file in the generated CSS, rather than creating a separate file and linking to it from the CSS.'
	)
	.option(
		'--embed-sources',
		'Embed the entire contents of the Sass files that contributed to the generated CSS in the source map.'
	)
	.option(
		'--source-map-urls <TYPE>',
		'Controls how the source maps that Sass generates link back to the Sass files  that contributed to the generated CSS. ["relative", "absolute"]',
		'relative'
	)
	.option('--error-css', 'Emit a CSS file when an error occurs during compilation (this is the default option).')
	.option('--no-error-css', 'Do not emit a CSS file when an error occurs during compilation.')
	.option('-I, --load-path <PATHS>', 'Adds an additional load path for Sass to look for stylesheets.')
	.option('-w, --watch', 'Watch stylesheets and recompile when they change.')
	.option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
	.option('--poll [DURATION]', 'Use polling for file watching. Can optionally pass polling interval; default 100 ms')
	.option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.');

sheetloaf.parse(process.argv);

function init(source) {
	postcssConfig = parser.generatePostcssConfig(sheetloaf.opts().config, sheetloaf.opts().use);

	if (usingStdin === true) {
		render(source);
	} else {
		parser.expandGlob(source[0].split(','), function (entries) {
			entries.forEach(function (filename) {
				if (path.basename(filename).charAt(0) !== '_') {
					render(filename);
				}
			});
		});
		watch(source);
	}
}

function watch(source) {
	if (sheetloaf.opts().watch === true) {
		chokidar
			.watch(source[0].split(','), {
				usePolling: sheetloaf.opts().poll !== undefined,
				interval: typeof sheetloaf.opts().poll === 'number' ? sheetloaf.opts().poll : 100,
				ignoreInitial: true,
				awaitWriteFinish: {
					stabilityThreshold: 1500,
					pollInterval: 100
				}
			})
			.on('change', (changed) => {
				console.log(`File changed: ${changed}`);

				parser.expandGlob(source[0].split(','), function (entries) {
					entries.forEach(function (filename) {
						if (path.basename(filename).charAt(0) !== '_') {
							render(filename);
						}
					});
				});
			})
			.on('add', (added) => {
				console.log(`File added: ${added}`);

				parser.expandGlob(source[0].split(','), function (entries) {
					entries.forEach(function (filename) {
						if (path.basename(filename).charAt(0) !== '_') {
							render(filename);
						}
					});
				});
			});
	}
}

function render(source) {
	if (usingStdin === false) {
		console.log(`Rendering ${source}...`);
	}

	let destination = parser.createDestination(
		source,
		sheetloaf.opts().output,
		sheetloaf.opts().dir,
		sheetloaf.opts().base,
		sheetloaf.opts().ext,
		usingStdin
	);
	let sassOptions = generateSassOptions(source, destination);

	let postcssMapOptions: object | boolean = {
		inline: sheetloaf.opts().embedSourceMap === true ? true : false,
		absolute: sheetloaf.opts().sourceMapUrls === 'absolute' ? true : false,
		sourcesContent: sheetloaf.opts().embedSources === true ? true : false
	};

	if (usingStdin === false && sheetloaf.opts().sourceMap !== false) {
		postcssMapOptions = false;
	}

	try {
		// When using Dart Sass, renderSync() is more than twice as fast as render(), due to the overhead of asynchronous callbacks.
		let sassResult = sass.renderSync(sassOptions);

		postcss(postcssConfig.plugins)
			.process(sassResult.css.toString(), {
				from: sassResult.stats.entry,
				to: destination,
				map: postcssMapOptions
			})
			.then((postedResult) => {
				postedResult.warnings().forEach((warn) => {
					process.stderr.write(warn.toString());
				});

				if (destination !== '') {
					try {
						fs.mkdirSync(path.dirname(destination), {
							recursive: true
						});
					} catch (err) {
						if (err.code !== 'EEXIST' || err.code !== 'EISDIR') throw err;
					}

					fs.writeFile(destination, postedResult.css, (err) => {
						// throws an error, you could also catch it here
						if (err) throw err;

						// success case, the file was saved
						console.log(color.green(`Successfully written to ${destination}`));
					});

					if (postedResult.map) {
						fs.writeFile(destination + '.map', postedResult.map.toString(), (err) => {
							if (err) throw err;
						});
					}
				} else {
					process.stdout.write(postedResult.css);
				}
			})
			.catch((err) => {
				if (destination !== '') {
					console.log(color.red(err));
				} else {
					process.stderr.write(err);
				}
			});
	} catch (e) {
		if (destination !== '') {
			console.log(color.red(e.formatted));
			try {
				fs.mkdirSync(path.dirname(destination), {
					recursive: true
				});
			} catch (mkDirErr) {
				if (mkDirErr.code !== 'EEXIST' || mkDirErr.code !== 'EISDIR') throw mkDirErr;
			}

			if (sheetloaf.opts().errorCss !== false) {
				fs.writeFile(destination, emitSassError(e), (writeFileErr) => {
					// throws an error, you could also catch it here
					if (writeFileErr) throw writeFileErr;

					// success case, the file was saved
					console.log(color.yellow(`Emitted error to ${destination}`));
				});
			}
		} else {
			process.stderr.write(e.formatted);
		}

		if (!sheetloaf.opts().watch && (process.exitCode == null || process.exitCode === 0)) {
			process.exitCode = 1;
		}
	}
}

function generateSassOptions(source: string, destination: string) {
	let paths = [];
	if (sheetloaf.opts().loadPath) {
		paths = sheetloaf.opts().loadPath.split(',');
	}

	if (usingStdin === true) {
		return {
			outFile: destination,
			outputStyle: sheetloaf.opts().style,
			data: source,
			sourceMap: false,
			sourceMapContents: false,
			sourceMapEmbed: false,
			includePaths: paths
		};
	} else {
		return {
			outFile: destination,
			outputStyle: sheetloaf.opts().style,
			file: source,
			sourceMap: sheetloaf.opts().sourceMap === false ? false : true,
			sourceMapContents: sheetloaf.opts().sourceMap === false ? false : true,
			sourceMapEmbed: sheetloaf.opts().sourceMap === false ? false : true,
			includePaths: paths
		};
	}
}

/**
 * Build a new CSS file that contains the error and puts its content in the body.
 * @param {*} err
 */
function emitSassError(err) {
	let singleLineErr = err.formatted
		.substr(0, err.formatted.indexOf('^'))
		.replace(/(\r\n|\n|\r)/gm, ' ')
		.replace(/'/, '')
		.replace(/╷.*?│/, '')
		.replace(/│/, '')
		.replace(`'`, '')
		.replace(`'`, '');

	let fileName = err.file.replace(/\\/g, '/');

	let css = `body:before { content: 'Line ${err.line}: ${singleLineErr}';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}body:after { content: '${fileName}';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}body * { display: none; }`;

	return css;
}
