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
let postcssConfig = {
    plugins: []
};

program.version(version, '-v, --version', 'Print the version of Sheetloaf.');

// Angled brackets denote required argument, square denote optional
program
    .arguments('[sources...]')
    .description('🍖 Compile Sass to CSS and transform the output using PostCSS all in one command.')
    .action((source) => {
        if (program.use !== undefined) {
            // If user specifies --use, ignore postcss config files.
            program.use.split(',').forEach(function (plugin) {
                postcssConfig.plugins.push(require(plugin));
                initialRender(source);
                watchFiles(source);
            });
        } else {
            postcssConfig = parser.getPostCSSConfig(program.config, function () {
                initialRender(source);
                watchFiles(source);
            });
        }

    });
program
    .option('-o, --output <LOCATION>', 'Output file.')
    .option('--dir <LOCATION>', 'Output directory.')
    .option('--base <DIR>', 'Mirror the directory structure relative to this path in the output directory, for use with --dir.', '')
    .option('--ext <EXTENSION>', 'Override the output file extension; for use with --dir', '.css')
    .option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
    .option('--source-map', 'Generate a source map (this is the default option).')
    .option('--no-source-map', 'Do not generate a source map.')
    .option('-w, --watch', 'Watch stylesheets and recompile when they change.')
    .option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.');

// https: //github.com/tj/commander.js/issues/137
if (process.stdin.isTTY) {
    program.parse(process.argv);
} else {
    process.stdin.on('readable', function () {
        var chunk = this.read();
        if (chunk !== null) {
            stdin += chunk;
        }
    });
    process.stdin.on('end', function () {
        program.parse(process.argv);
    });
}

function initialRender(source) {
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
    }
}

function watchFiles(source) {
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

function renderSheet(filename = null, stdin = null) {
    console.log(program.sourceMap !== false);
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
        outFile: destination,
        outputStyle: program.style
    }

    //https://sass-lang.com/documentation/cli/dart-sass#error-css
    if (stdin !== null) {
        sassOptions.data = stdin
        sassOptions.sourceMap = false;
        sassOptions.sourceMapEmbed = false;
    } else {
        sassOptions.file = filename;
        sassOptions.sourceMap = program.sourceMap !== false;
        sassOptions.sourceMapEmbed = program.sourceMap !== false;
    }
    try {
        let result = sass.renderSync(sassOptions);
        postcss(postcssConfig.plugins).process(result.css.toString(), {
            from: result.stats.entry,
            to: destination,
            map: (stdin !== null ? false : program.sourceMap !== false)
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
    } catch (e) {
        if (destination !== '') {
            console.log(color.red(e.formatted));
            try {
                fs.mkdirSync(path.dirname(destination), {
                    recursive: true
                });
            } catch (mkDirErr) {
                if (mkDirErr.code !== 'EEXIST' || mkDirErr.code !== 'EISDIR') throw mkDirErr
            }

            fs.writeFile(destination, parser.emitSassError(e), (writeFileErr) => {
                // throws an error, you could also catch it here
                if (writeFileErr) throw writeFileErr;

                // success case, the file was saved
                console.log(color.yellow(`Emitted error to ${destination}`));
            })
        } else {
            process.stderr.write(e.formatted);
        }
    }
    /*
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
            // /f (destination !== '') {
            //     console.log(color.red(err.formatted));
            // } else {
            //     process.stderr.write(err.formatted);
            // }
        }
    });
    */
}