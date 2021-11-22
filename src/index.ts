import { program } from 'commander';
import { config } from 'process';

const chokidar = require('chokidar');
const color = require('picocolors');
const { Command } = require('commander');
const fs = require('fs');
const fg = require('fast-glob');
const path = require('path');
const picomatch = require('picomatch');
const postcss = require('postcss');
const sass = require('sass');
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
	.option('--base <DIR>', 'Mirror the directory structure relative to this path in the output directory, for use with --dir.', '')
	.option('--ext <EXTENSION>', 'Override the output file extension; for use with --dir', '.css')
	.option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
	.option('--source-map', 'Generate a source map (this is the default option).')
	.option('--no-source-map', 'Do not generate a source map.')
	.option('--embed-source-map', 'Embed the contents of the source map file in the generated CSS, rather than creating a separate file and linking to it from the CSS.')
	.option('--embed-sources', 'Embed the entire contents of the Sass files that contributed to the generated CSS in the source map.')
	.option('--source-map-urls <TYPE>', 'Controls how the source maps that Sass generates link back to the Sass files  that contributed to the generated CSS. ["relative", "absolute"]', 'relative')
	.option('--error-css', 'Emit a CSS file when an error occurs during compilation (this is the default option).')
	.option('--no-error-css', 'Do not emit a CSS file when an error occurs during compilation.')
	.option('-I, --load-path <PATHS>', 'Adds an additional load path for Sass to look for stylesheets.')
	.option('-w, --watch', 'Watch stylesheets and recompile when they change.')
	.option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
	.option('--poll [DURATION]', 'Use polling for file watching. Can optionally pass polling interval; default 100 ms')
	.option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.');

sheetloaf.parse(process.argv);

function init(source) {
	postcssConfig = generatePostcssConfig();

	if (usingStdin === true) {
		render(source);
	} else {
		expandGlob(source[0].split(','), function (entries) {
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

				expandGlob(source[0].split(','), function (entries) {
					entries.forEach(function (filename) {
						if (path.basename(filename).charAt(0) !== '_') {
							render(filename);
						}
					});
				});
			})
			.on('add', (added) => {
				console.log(`File added: ${added}`);

				expandGlob(source[0].split(','), function (entries) {
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

	let destination = parseDestination(source);
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

/**
 * Generates an object used for postcss configuration.
 */
function generatePostcssConfig() {
	let config = {
		plugins: []
	};
	// If user specifies --use, we ignore postcss config files.
	if (sheetloaf.opts().use !== undefined) {
		sheetloaf
			.opts()
			.use.split(',')
			.forEach(function (plugin) {
				config.plugins.push(require(plugin));
			});
	} else {
		let configFileLoc;
		if (sheetloaf.opts().config !== undefined) {
			configFileLoc = path.resolve(process.cwd(), sheetloaf.opts().config, 'postcss.config.js');
		} else {
			configFileLoc = path.resolve(process.cwd(), 'postcss.config.js');
		}

		try {
			fs.lstatSync(configFileLoc);
			config = require(configFileLoc);
		} catch (e) {
			// TODO
		}

		return config;
	}
}

function generateSassOptions(source: string, destination: string) {
	if (usingStdin === true) {
		return {
			outFile: destination,
			outputStyle: sheetloaf.opts().style,
			data: source,
			sourceMap: false,
			sourceMapContents: false,
			sourceMapEmbed: false,
			includePaths: sheetloaf.opts().loadPath.split(',')
		};
	} else {
		return {
			outFile: destination,
			outputStyle: sheetloaf.opts().style,
			file: source,
			sourceMap: sheetloaf.opts().sourceMap === false ? false : true,
			sourceMapContents: sheetloaf.opts().sourceMap === false ? false : true,
			sourceMapEmbed: sheetloaf.opts().sourceMap === false ? false : true,
			includePaths: sheetloaf.opts().loadPath.split(',')
		};
	}
}

/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 *
 */
function expandGlob(input: string[], callback, index: number = 0, expanded: string[] = []) {
	if (index < input.length) {
		let isGlob = false;
		let isDir = false;
		let isFile = false;

		isGlob = picomatch.scan(input[index]).isGlob;

		if (isGlob === false) {
			try {
				isDir = fs.lstatSync(path.normalize(input[index])).isDirectory();
				isFile = fs.lstatSync(path.normalize(input[index])).isFile();
			} catch (err) {
				throw err;
			}
		}

		if (isGlob || isFile) {
			let files = fg
				.sync(input[index], {
					dot: true
				})
				.map((entry) => path.normalize(entry));
			expanded.push(...files);

			index = index + 1;
			expandGlob(input, callback, index, expanded);
		} else if (isDir) {
			let dir = input[index];

			fs.readdir(dir, (err, files) => {
				if (err) {
					throw err;
				} else {
					files.forEach((file) => {
						let fullname = path.join(dir, file);
						if (!fs.lstatSync(fullname).isDirectory()) {
							expanded.push(fullname);
						}
					});

					index = index + 1;
					expandGlob(input, callback, index, expanded);
				}
			});
		}
	} else {
		callback(expanded);
	}
}

function parseDestination(filename: string) {
	let output: string = '',
		mirror: string = '',
		base: string = '',
		extension: string = '.css';

	let result: string = '';

	// if (sheetloaf.opts().base && usingStdin)

	// if (path.extname(output) === '') {
	//     let mirror = (base !== '' ? path.dirname(filename.replace(path.join(base, '/'), '')) : '');
	//     return path.join(output, mirror, path.basename(filename, path.extname(filename)) + extension);
	// } else {
	//     return output;
	// }

	if (sheetloaf.opts().dir && usingStdin === false) {
		output = sheetloaf.opts().dir;
		base = sheetloaf.opts().base;
		extension = sheetloaf.opts().ext;
	} else if (sheetloaf.opts().output) {
		output = sheetloaf.opts().output();
	}

	if (path.extname(output) === '') {
		if (base !== '') {
			mirror = path.dirname(filename.replace(path.join(base, '/'), ''));
		}
		result = path.join(output, mirror, path.basename(filename, path.extname(filename)) + extension);
	} else {
		result = output;
	}

	return result as string;
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
		.replace(`'`, '');

	let fileName = err.file.replace(/\\/g, '/');

	let css = `body:before { content: 'Line ${err.line}: ${singleLineErr}';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}body:after { content: '${fileName}';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}body * { display: none; }`;

	return css;
}
