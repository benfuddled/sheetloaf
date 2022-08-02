#!/usr/bin/env node

import { Command } from 'commander';
import color from 'picocolors';
import fs from 'fs';
import path from 'path';
import picomatch from 'picomatch';
import fg from 'fast-glob';
import sass, { Options } from 'sass';
import postcss from 'postcss';

const sheetloaf = new Command();
sheetloaf.version("1.2.0", '-v, --version', 'Print the version of Sheetloaf.');

let usingStdin: boolean = false;
let postcssConfig = {
    plugins: []
};

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
    postcssConfig = generatePostcssConfig(sheetloaf.opts().config, sheetloaf.opts().use);
    expandGlob(source[0].split(','), function (entries) {
        //console.log(entries);
        entries.forEach(function (fileName) {
            if (path.basename(fileName).charAt(0) !== '_') {
                const destination = buildDestinationPath(
                    fileName,
                    sheetloaf.opts().output,
                    sheetloaf.opts().dir,
                    sheetloaf.opts().base,
                    sheetloaf.opts().ext,
                    usingStdin
                );
                renderSass(fileName, destination);
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

async function renderSass(fileName: string, destination: string) {
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
            renderPost(fileName, destination, result);
        } else {
            const options: Options<"sync"> = {
                style: sheetloaf.opts().style,
                loadPaths: sheetloaf.opts().loadPath ? sheetloaf.opts().loadPath.split(',') : [],
                sourceMap: sheetloaf.opts().sourceMap === false ? false : true,
                sourceMapIncludeSources: sheetloaf.opts().sourceMap === false ? false : true
            };
            const result = sass.compile(fileName, options);
            renderPost(fileName, destination, result);
        }
    } catch (e: any) {
        sassErrorCatcher(e, destination);
    }
}

function renderPost(fileName: string, destination: string, sassResult: any) {

    let postcssMapOptions: any = {
        annotation: true,
        prev: sassResult.sourceMap,
        inline: sheetloaf.opts().embedSourceMap === true ? true : false,
        absolute: sheetloaf.opts().sourceMapUrls === 'absolute' ? true : false,
        sourcesContent: sheetloaf.opts().embedSources === true ? true : false,
    };

    if (usingStdin === false && sheetloaf.opts().sourceMap === false) {
        postcssMapOptions = false;
    }
    //console.log(postcssMapOptions);
    postcss(postcssConfig.plugins)
        .process(sassResult.css.toString(), {
            from: fileName,
            to: destination,
            map: postcssMapOptions
        })
        .then((postedResult) => {
            console.log(postedResult);
            postedResult.warnings().forEach((warn) => {
                process.stderr.write(warn.toString());
            });

            if (destination !== '') {
                try {
                    fs.mkdirSync(path.dirname(destination), {
                        recursive: true
                    });
                } catch (err: any) {
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


// TODO: returning a blank string seems super messy, this could use a refactor.
/**
 *
 * @param filename
 * @returns path, or a blank string if the combination of options provided does not give a valid path.
 */
function buildDestinationPath(fileName: string, outFile: string = '', dir: string = '', base: string = '', extension: string = '.css', usingStdin: boolean) {
    let destination: string = '';
    let mirror: string = '';

    if (usingStdin === true) {
        if (outFile.length > 0) {
            destination = outFile;
        } else {
            destination = '';
        }
    } else {
        if (dir.length > 0) {
            if (base.length > 0) {
                mirror = path.dirname(fileName.replace(path.join(base, '/'), ''));
            }
            destination = path.join(dir, mirror, path.basename(fileName, path.extname(fileName)) + extension);
        } else if (outFile.length > 0) {
            destination = outFile;
        } else {
            destination = '';
        }
    }

    return destination;
}

function sassErrorCatcher(e: any, destination: string) {
    if (destination !== '') {
        console.log(e.message);
        try {
            fs.mkdirSync(path.dirname(destination), {
                recursive: true
            });
        } catch (mkDirErr: any) {
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
        process.stderr.write(e.message);
    }

    if (!sheetloaf.opts().watch && (process.exitCode == null || process.exitCode === 0)) {
        process.exitCode = 1;
    }
}

/**
 * Build a new CSS file that contains the error and puts its content in the body.
 * @param {*} err
 */
function emitSassError(err: any) {
    let css = `body:before { content: 'Error at: ${err.span}';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}body:after { content: '${err.sassMessage}';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}body * { display: none; }`;

    return css;
}

/**
 * Generates an object used for postcss configuration.
 */
function generatePostcssConfig(configArg: string = '', use: string) {
    let obj = {
        plugins: []
    };
    // If user specifies --use, we ignore postcss config files.
    if (use) {
        // TODO implement this
        // use.split(',').forEach(function (plugin) {
        //     obj.plugins.push(require(plugin));
        // });
    } else {
        let configFileLoc: string = path.resolve(process.cwd(), configArg, 'postcss.config.js');

        try {
            fs.lstatSync(configFileLoc);
            obj = require(configFileLoc);
        } catch (e) {
            // TODO
        }
    }
    return obj;
}