#!/usr/bin/env node

const color = require('colorette');
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const version = require('./package.json').version;
const parser = require('./parser');
const {
    Command
} = require('commander');
const postcss = require('postcss');
const chokidar = require('chokidar');
const program = new Command();

let stdin = '';

program.version(version, '-v, --version', 'Print the version of Sheetloaf.');

// Angled brackets denote required argument, square denote optional
program
    .arguments('[sources...]')
    .description('🍖 Compile Sass to CSS and transform the output using PostCSS all in one command.')
    .action((source) => {
        if (stdin) {
            renderSheet(null, stdin);
        } else {
            parser.expandGlob(source[0].split(','), function (entries) {
                entries.forEach(function (filename) {
                    if (path.basename(filename).charAt(0) !== '_') {
                        renderSheet(filename);
                    }
                });
            });

            if (program.watch) {
                chokidar.watch(source[0].split(','), {
                    usePolling: true,
                    interval: 500,
                    ignoreInitial: true,
                    awaitWriteFinish: {
                        stabilityThreshold: 1500,
                        pollInterval: 100
                    }
                }).on('change', (changed) => {
                    console.log(`File changed: ${changed}`);

                    parser.expandGlob(source[0].split(','), function (entries) {
                        entries.forEach(function (filename) {
                            if (path.basename(filename).charAt(0) !== '_') {
                                renderSheet(filename);
                            }
                        });
                    });
                }).on('add', (added) => {
                    console.log(`File added: ${added}`);

                    parser.expandGlob(source[0].split(','), function (entries) {
                        entries.forEach(function (filename) {
                            if (path.basename(filename).charAt(0) !== '_') {
                                renderSheet(filename);
                            }
                        });
                    });
                });
            }
        }
    });
program
    .option('-o, --output <LOCATION>', 'Output file.')
    .option('--dir <LOCATION>', 'Output directory.')
    .option('--base <DIR>', 'Mirror the directory structure relative to this path in the output directory, for use with --dir.', '')
    .option('--ext <EXTENSION>', 'Override the output file extension; for use with --dir', '.css')
    .option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
    .option('--no-source-map', 'Whether to generate source maps.')
    .option('-w, --watch', 'Watch stylesheets and recompile when they change.')
    .option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.');

let postcssConfig = {
    plugins: []
};

// https: //github.com/tj/commander.js/issues/137
if (process.stdin.isTTY) {
    program.parse(process.argv);
    generatePostcssConfig();
} else {
    process.stdin.on('readable', function () {
        var chunk = this.read();
        if (chunk !== null) {
            stdin += chunk;
        }
    });
    process.stdin.on('end', function () {
        program.parse(process.argv);
        generatePostcssConfig();
    });
}

function generatePostcssConfig() {
    if (program.use !== undefined) {
        // If user specifies --use, ignore postcss config files.
        program.use.split(',').forEach(function (plugin) {
            postcssConfig.plugins.push(require(plugin));
        });
    } else {
        postcssConfig = parser.getPostCSSConfig(program.config);
    }
}

function renderSheet(filename = null, stdin = null) {

    if (stdin === null) {
        console.log(`Rendering ${filename}...`);
    }

    let destination;
    if (program.dir && stdin === null) {
        destination = parser.parseDest(filename, program.dir, program.base, program.ext);
    } else if (program.output) {
        destination = parser.parseDest(filename, program.output);
    } else {
        destination = '';
    }

    //When using Dart Sass, renderSync() is more than twice as fast as render(), due to the overhead of asynchronous callbacks.
    // let result = sass.renderSync({
    //     file: filename,
    //     sourceMap: true,
    //     sourceMapEmbed: true,
    //     outFile: destination,
    //     outputStyle: program.style
    // });

    let sassOptions = {
        sourceMap: program.sourceMap,
        sourceMapEmbed: program.sourceMap,
        outFile: destination,
        outputStyle: program.style
    }

    if (stdin !== null) {
        sassOptions.data = stdin
    } else {
        sassOptions.file = filename
    }

    sass.render(sassOptions, function (err, result) {
        if (err === null) {
            postcss(postcssConfig.plugins).process(result.css.toString(), {
                from: result.stats.entry,
                to: destination,
                map: program.sourceMap
            }).then(postedResult => {
                if (destination !== '') {
                    try {
                        fs.mkdirSync(path.dirname(destination), {
                            recursive: true
                        });
                    } catch (err) {
                        if (err.code !== 'EEXIST' || err.code !== 'EISDIR') throw err
                    }

                    fs.writeFile(destination, postedResult.css, (err) => {
                        // throws an error, you could also catch it here
                        if (err) throw err;

                        // success case, the file was saved
                        console.log(color.green(`Successfully written to ${destination}`));
                    })
                } else {
                    process.stdout.write(postedResult.css);
                }
            }).catch(err => {
                if (destination !== '') {
                    console.log(color.red(err));
                } else {
                    process.stderr.write(err);
                }
            })
        } else {
            if (destination !== '') {
                console.log(color.red(err.formatted));
                try {
                    fs.mkdirSync(path.dirname(destination), {
                        recursive: true
                    });
                } catch (err) {
                    if (err.code !== 'EEXIST' || err.code !== 'EISDIR') throw err
                }

                fs.writeFile(destination, parser.emitSassError(err), (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;

                    // success case, the file was saved
                    console.log(color.yellow(`Emitted error to ${destination}`));
                })
            } else {
                process.stderr.write(err.formatted);
            }
            /*if (destination !== '') {
                console.log(color.red(err.formatted));
            } else {
                process.stderr.write(err.formatted);
            }*/
        }
    });
}



/*try {
    // Take the SCSS file and convert it to CSS.
    console.log('Rendering ' + fileToRender.location);
    let result = SASS.renderSync({
        file: fileToRender.location,
        outputStyle: 'compressed',
        sourceMap: renderSourceMaps,
        sourceMapContents: renderSourceMaps,
        sourceMapEmbed: renderSourceMaps,
        outFile: fileToRender.outputName
    });
    fileToRender.css = result.css;
} catch (err) {
    fileToRender.consoleError = err.formatted;

    // If there's an error, take it and make it useful to the user.
    fileToRender.sassError = err.formatted.substr(0, err.formatted.indexOf('^'));
    fileToRender.sassError = fileToRender.sassError.replace(/(\r\n|\n|\r)/gm, " ");
    fileToRender.sassError = fileToRender.sassError.replace(/'/, "");
    fileToRender.sassError = fileToRender.sassError.replace(/╷.*?│/, "");
    fileToRender.sassError = fileToRender.sassError.replace(/│/, "");
    fileToRender.sassError = 'Line ' + err.line + ': ' + fileToRender.sassError;

    // Build a new CSS file that contains the error and puts its 
    // content in the body.
    let fileName = err.file.replace(/\\/g, "/");
    fileToRender.css = "body:before { content: '" + fileToRender.sassError + "';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}";
    fileToRender.css = fileToRender.css + "body:after { content: '" + fileName + "';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}";
    fileToRender.css = fileToRender.css + "body * { display: none; }";

}*/