#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import picomatch from 'picomatch';
import fg from 'fast-glob';
import sass, { Options } from 'sass';

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

function main(source: string) {
    expandGlob(source[0].split(','), function (entries) {
        console.log(entries);
        entries.forEach(function (fileName) {
            if (path.basename(fileName).charAt(0) !== '_') {
                renderSass(fileName);
            }
        });
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

async function renderSass(fileName: string) {
    try {
        if (sheetloaf.opts().async === true) {
            //TODO
            // Sass doesn't automatically add a sourceMappingURL comment to the generated CSS. 
            // It's up to callers to do that, since callers have full knowledge of where the 
            // CSS and the source map will exist in relation to one another and how they'll be 
            // served to the browser.

            //TODO
            // account for stdin

            const options: Options<"async"> = {
                style: sheetloaf.opts().style,
                loadPaths: sheetloaf.opts().loadPath ? sheetloaf.opts().loadPath.split(',') : [],
                sourceMap: sheetloaf.opts().sourceMap === false ? false : true,
                sourceMapIncludeSources: sheetloaf.opts().sourceMap === false ? false : true
            };
            const result = await sass.compileAsync(fileName, options);
            console.log(result.css);
        } else {
            const options: Options<"sync"> = {
                style: sheetloaf.opts().style,
                loadPaths: sheetloaf.opts().loadPath ? sheetloaf.opts().loadPath.split(',') : [],
                sourceMap: sheetloaf.opts().sourceMap === false ? false : true,
                sourceMapIncludeSources: sheetloaf.opts().sourceMap === false ? false : true
            };
            const result = sass.compile(fileName, options);
            console.log(result.css);
        }
    } catch (e) {
        console.log(e);
    }
}

function renderPost(result: any) {

}





// function generateSassOptions(source, destination) => string {
//     let obj = {
//         outFile: destination,
//         outputStyle: sheetloaf.opts().style,
//         includePaths: sheetloaf.opts().loadPath ? sheetloaf.opts().loadPath.split(',') : []
//     };

//     if (usingStdin === true) {
//         obj.data = source;
//         obj.sourceMap = false;
//         obj.sourceMapContents = false;
//         obj.sourceMapEmbed = false;
//     } else {
//         obj.file = source;
//         obj.sourceMap = sheetloaf.opts().sourceMap === false ? false : true;
//         obj.sourceMapContents = sheetloaf.opts().sourceMap === false ? false : true;
//         obj.sourceMapEmbed = sheetloaf.opts().sourceMap === false ? false : true;
//     }

//     return "hello";
// }



























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


// TODO: returning a blank string seems super messy, this could use a refactor.
function createDestination(fileName: string, outFile: string, dir: string, base: string, extension: string, usingStdin: boolean) {
    let result = '';
    let mirror = '';

    if (!outFile) outFile = '';
    if (!extension) extension = '.css';

    if (usingStdin === true) {
        if (outFile.length > 0) {
            result = outFile;
        } else {
            result = '';
        }
    } else {
        if (!dir) dir = '';
        if (!base) base = '';

        if (dir.length > 0) {
            if (base.length > 0) {
                mirror = path.dirname(fileName.replace(path.join(base, '/'), ''));
            }
            result = path.join(dir, mirror, path.basename(fileName, path.extname(fileName)) + extension);
        } else if (outFile.length > 0) {
            result = outFile;
        } else {
            result = '';
        }
    }

    return result;
}