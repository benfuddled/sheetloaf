#!/usr/bin/env node

import { Command } from 'commander';
import chokidar from 'chokidar';
import color from 'picocolors';
import fs from 'fs';
import path from 'path';
import sass, { Options } from 'sass';
import postcss from 'postcss';

import * as configs from './configs';
import * as fileFinder from './fileFinder';
import * as sources from './sources';

const sheetloaf = new Command();
sheetloaf.version("1.13.0", '-v, --version', 'Print the version of Sheetloaf.');

let usingStdin: boolean = false;
let postcssConfig: configs.postcssConfigFile = {
    plugins: []
};

sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action((source: string[]) => {
        if (sheetloaf.opts().use) {
            // If user specifies --use, we ignore postcss config files.
            postcssConfig = configs.generatePostcssConfigFromUse(sheetloaf.opts().use);
        } else {
            postcssConfig = configs.generatePostcssConfigFromFile(sheetloaf.opts().config);
        }
        if (source.length > 0) {
            // If source is provided, we ignore pipes.
            renderAllFiles(source);
            watch(source);
        } else if (!process.stdin.isTTY) {
            // see github.com/tj/commander.js/issues/137
            let stdin = '';
            process.stdin.on('readable', () => {
                var chunk = process.stdin.read();
                if (chunk !== null) {
                    stdin += chunk;
                }
            });
            process.stdin.on('end', () => {
                usingStdin = true;
                renderSassFromStdin(stdin);
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
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.')
    .option('--async', `Use sass' asynchronous API. This may be slower.`);
sheetloaf.parse(process.argv);

function renderAllFiles(source: string[]) {
    fileFinder.getAllFilesPathsFromSources(source[0].split(','), function (entries) {
        entries.forEach(function (fileName) {
            if (path.basename(fileName).charAt(0) !== '_') {
                renderSass(fileName);
            }
        });
    });
}

function renderPartially(source: string[], fileName: string) {
    if (path.basename(fileName).charAt(0) !== '_') {
        renderSass(fileName);
    } else {
        let partialExistsInSassSources = false;
        let ind = 0;
        while (ind < sources.getChecker().length) {
            const toCheck = sources.getChecker()[ind];

            if (toCheck.containsPartial(fileName)) {
                partialExistsInSassSources = true;
                renderSass(toCheck.getMain());
            }
            ind = ind + 1;
        }

        if (partialExistsInSassSources === false) {
            // SassSources are built with sass's CompileResult object when
            // sheetloaf initially runs. However, if compilation fails, the 
            // SassSource will not be generated for that particular file.
            // That means if a partial is later fixed to not error out and
            // it will not render at all.
            // We therefore check for this condition and rebuild everything
            // if it doesn't exist.
            sources.clearSourcesChecker();
            renderAllFiles(source);
        }
    }
}

function watch(source: string[]) {
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

                renderPartially(source, changed);
            })
            .on('add', (added) => {
                console.log(`File added: ${added}`);

                // Clear out old info.
                sources.clearSourcesChecker();
                renderAllFiles(source);
            });
    }
}

async function renderSass(fileName: string) {
    console.log(`Rendering ${fileName}...`);

    const destination = fileFinder.buildDestinationPath(
        fileName,
        sheetloaf.opts().output,
        sheetloaf.opts().dir,
        sheetloaf.opts().base,
        sheetloaf.opts().ext,
        usingStdin
    );
    try {
        if (sheetloaf.opts().async === true) {
            const options: Options<"async"> = configs.generateSassOptionsAsync(sheetloaf.opts());
            const result = await sass.compileAsync(fileName, options);
            renderPost(fileName, destination, result);
            sources.addResultToSourcesChecker(fileName, result);
        } else {
            const options: Options<"sync"> = configs.generateSassOptions(sheetloaf.opts());
            const result = sass.compile(fileName, options);
            renderPost(fileName, destination, result);
            sources.addResultToSourcesChecker(fileName, result);
        }
    } catch (e: any) {
        sassErrorCatcher(e, destination);
    }
}

async function renderSassFromStdin(text: string) {
    const destination = fileFinder.buildDestinationPath(
        '',
        sheetloaf.opts().output,
        sheetloaf.opts().dir,
        sheetloaf.opts().base,
        sheetloaf.opts().ext,
        usingStdin
    );
    try {
        if (sheetloaf.opts().async === true) {
            const options: Options<"async"> = configs.generateSassOptionsAsync(sheetloaf.opts());
            const result = await sass.compileStringAsync(text, options);
            renderPost('', destination, result);
        } else {
            const options: Options<"sync"> = configs.generateSassOptions(sheetloaf.opts());
            const result = sass.compileString(text, options);
            renderPost('', destination, result);
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

    if (usingStdin === true || sheetloaf.opts().sourceMap === false) {
        postcssMapOptions = false;
    }
    postcss(postcssConfig.plugins)
        .process(sassResult.css.toString(), {
            from: fileName,
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
                } catch (err: any) {
                    if (err.code !== 'EEXIST' || err.code !== 'EISDIR') throw err;
                }

                fs.writeFile(destination, postedResult.css, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // success case, the file was saved
                        console.log(color.green(`Successfully written to ${destination}`));
                    }
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
    // Sanitize message so that it fits in a content attribute.
    const message = err.sassMessage.toString().replace(/"/g, "'").replace(/\n/g, " ");
    const context = err.span.context.toString().replace(/"/g, "'").replace(/\n/g, " ");
    let css = `
        body:before { 
            content: "Error at line ${err.span.start.line} in ${err.span.url.pathname}";
            display: table;
            background-color:#cc0000;
            color:white;
            border-radius:5px;
            margin-bottom:5px;
            padding:5px;
            font-family:sans-serif
        }
        body:after { 
            content: "${context} ----- ${message}";
            display: table;
            background-color:#0e70b0;
            color:white;
            border-radius:5px;
            padding:5px;
            margin-bottom: 5px;
            font-family:sans-serif
        }
        body * { display: none; }
    `;

    return css;
}