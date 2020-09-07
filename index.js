#!/usr/bin/env node
//todo sourcemaps and semver and stdin
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const picomatch = require('picomatch');
const version = require('./package.json').version;
const parser = require('./parser');
const { Command } = require('commander');
const postcss = require('postcss');
const chokidar = require('chokidar');
const program = new Command();

console.log(process.argv);

program.version(version, '-v, --version', 'Print the version of Sheetloaf.');

// Angled brackets denote required argument, square denote optional
program
    .arguments('<sources...>') // can change source to []
    .description('🍖 Compile Sass to CSS and transform the output using PostCSS all in one command.')
    .action((source) => {
        //console.log(source[0].split(','));
        parser.expandGlob(source[0].split(','), 0, function(expanded) {
            parseInput(expanded);
        });
    });
program
    .option('-o, --output <LOCATION>', 'Accepts an individual filename, directories, or globs. If this option is not included, file contents will be written to stdout.')
    .option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
    .option('--no-source-map', 'Whether to generate source maps.')
    .option('-w, --watch', 'Watch stylesheets and recompile when they change.')
    .option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.');
program.parse(process.argv);

function parseInput(expanded) {
    //console.log(expanded);
}

/*
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

parser.parseInput(input, function (entries) {
    entries.forEach(function (filename) {
        if (path.basename(filename).charAt(0) !== '_') {
            renderSheet(filename);
        }
    });
});

if (program.watch) {

    chokidar.watch(input, {
        usePolling: true,
        interval: 500,
        awaitWriteFinish: {
            stabilityThreshold: 1500,
            pollInterval: 100
        }
    }).on('change', (changed) => {
        console.log(`File changed: ${changed}`);

        parser.parseInput(input, function (entries) {
            entries.forEach(function (filename) {
                if (path.basename(filename).charAt(0) !== '_') {
                    renderSheet(filename);
                }
            });
        });
    });

}
function renderSheet(filename) {
    console.log(`Rendering ${filename}...`)
    let destination = parser.parseDestination(filename, input, program.output);

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
            }).catch(err => {
                console.log(err);
            })
        } else {
            console.log(err.formatted);
        }
    });
}*/