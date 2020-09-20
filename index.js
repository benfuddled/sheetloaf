#!/usr/bin/env node
//todo sourcemaps and semver and stdin
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const version = require('./package.json').version;
const parser = require('./parser');
const { Command } = require('commander');
const postcss = require('postcss');
const chokidar = require('chokidar');
const program = new Command();

program.version(version, '-v, --version', 'Print the version of Sheetloaf.');

// Angled brackets denote required argument, square denote optional
program
    .arguments('<sources...>') // can change source to []
    .description('🍖 Compile Sass to CSS and transform the output using PostCSS all in one command.')
    .action((source) => {
        parser.expandGlob(source[0].split(','), function(entries) {
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
        
                parser.expandGlob(source[0].split(','), function(entries) {
                    entries.forEach(function (filename) {
                        if (path.basename(filename).charAt(0) !== '_') {
                            renderSheet(filename);
                        }
                    });
                });
            }).on('add', (added) => {
                console.log(`File added: ${added}`);
        
                parser.expandGlob(source[0].split(','), function(entries) {
                    entries.forEach(function (filename) {
                        if (path.basename(filename).charAt(0) !== '_') {
                            renderSheet(filename);
                        }
                    });
                });
            });
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
program.parse(process.argv);


let postcssConfig = {
    plugins: []
};
if (program.use !== undefined) {
    // If user specifies --use, ignore postcss config files.
    program.use.split(',').forEach(function (plugin) {
        postcssConfig.plugins.push(require(plugin));
    });
} else {
    postcssConfig = parser.getPostCSSConfig(program.config);
}

function renderSheet(filename) {

    let destination;
    if (program.dir) {
        console.log(`Rendering ${filename}...`);
        destination = parser.parseDest(filename, program.dir, program.base, program.ext);
    } else if (program.output) {
        console.log(`Rendering ${filename}...`);
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

    sass.render({
        file: filename,
        sourceMap: program.sourceMap,
        sourceMapEmbed: program.sourceMap,
        outFile: destination,
        outputStyle: program.style
    }, function (err, result) {
        if (err === null) {
            postcss(postcssConfig.plugins).process(result.css.toString(), {
                from: result.stats.entry,
                to: destination,
                map: program.sourceMap
            }).then(postedResult => {
                if (destination !== '') {
                    try {
                        fs.mkdirSync(path.dirname(destination), { recursive: true });
                    } catch (err) {
                        if (err.code !== 'EEXIST' || err.code !== 'EISDIR') throw err
                    }
    
                    fs.writeFile(destination, postedResult.css, (err) => {
                        // throws an error, you could also catch it here
                        if (err) throw err;
    
                        // success case, the file was saved
                        console.log(`Successfully written to ${destination}`);
                    })
                } else {
                    process.stdout.write(postedResult.css);
                }
            }).catch(err => {
                if (destination !== '') {
                    console.log(err);
                } else {
                    process.stderr.write(err);
                }
            })
        } else {
            if (destination !== '') {
                console.log(err.formatted);
            } else {
                process.stderr.write(err.formatted);
            }
        }
    });
}