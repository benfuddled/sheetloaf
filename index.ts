#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import picomatch from 'picomatch';
import fg from 'fast-glob';
import sass from 'sass';

const sheetloaf = new Command();
sheetloaf.version("1.2.0", '-v, --version', 'Print the version of Sheetloaf.');

let usingStdin: boolean = false;

sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action((source: string) => {
        //console.log(source);
        main(source);
        // TODO: reimplement fully
        // if (source.length > 0) {
        //     // If source is provided, we ignore pipes.
        //     //init(source);
        // } else if (!process.stdin.isTTY) {
        //     // see github.com/tj/commander.js/issues/137
        //     let stdin = '';
        //     process.stdin.on('readable', () => {
        //         var chunk = process.stdin.read();
        //         if (chunk !== null) {
        //             stdin += chunk;
        //         }
        //     });
        //     process.stdin.on('end', () => {
        //         usingStdin = true;
        //         //init(stdin);
        //     });
        // }
    });

// TODO: Add option for async
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
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.')
    .option('--async', `Use sass' asynchronous API. This may be slower.`);

sheetloaf.parse(process.argv);

async function main(source: string) {
    expandGlob(source[0].split(','), function (entries) {
        console.log(entries);
        // entries.forEach(function (filename) {
        //     if (path.basename(filename).charAt(0) !== '_') {
        //         //render(filename);
        //     }
        // });
    });



    // if (sheetloaf.opts().async === true) {
    //     console.log('rendering async...');
    //     const result = await sass.compileAsync(source[0]);
    //     console.log(result.css);
    // } else {
    //     console.log('rendering sync...');
    //     console.log(sass.compile(source[0]).css);
    // }
}
































/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 *
 */
function expandGlob(input: string[], callback: (expanded: string[]) => void) {
    let expanded: string[] = [];
    let index: number = 0;

    for (let i = 0; i < input.length; i++) {
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
                }
            });
        }
    }

    callback(expanded);
}