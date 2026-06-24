#!/usr/bin/env node

import chokidar from 'chokidar';
import color from 'picocolors';
import { Command, type OptionValues } from 'commander';
import fs from 'fs';
import { globSync } from 'glob';
import postcss from 'postcss';
import path from 'path';
import { initCompiler, initAsyncCompiler, type Compiler, type AsyncCompiler, type Options, type CompileResult } from 'sass-embedded';

import * as configs from './configs.ts';
import * as fileFinder from './fileFinder.ts';
import * as sources from './sources.ts';

const sheetloaf = new Command();
sheetloaf.version("1.26.1", '-v, --version', 'Print the version of Sheetloaf.');

let postcssConfig: configs.postcssConfigFile = {
    plugins: []
};

interface CWrap {
    sync?: Compiler;
    async?: AsyncCompiler;
}

class CompWrapper {
    private initialized: boolean = false;
    private usingStdin: boolean = false;
    private source: string;
    private entries: string[];
    private options: OptionValues;
    private compiler: CWrap = {};

    init(options: OptionValues, source: string = ""): Promise<string> {
        this.options = options;
        this.source = source;

        return new Promise((resolve, reject) => {
            if (this.source.length > 0) {
                fileFinder.getAllFilesPathsFromSources(this.source.split(','), (entries: string[]) => {
                    this.entries = entries;

                    if (this.entries.length > 0 && this.entries[0]) {
                        this.usingStdin = false;
                    } else {
                        this.usingStdin = true;
                    }

                    if (this.options.async === true) {
                        initAsyncCompiler().then((compiler) => {
                            this.compiler.async = compiler;
                            this.initialized = true;
                            resolve("Compiler initialized.")
                        }).catch((e) => {
                            reject(e);
                        });
                    } else {
                        this.compiler.sync = initCompiler();
                        this.initialized = true;
                        resolve("Compiler initialized.")
                    }
                });
            } else {
                this.usingStdin = true;
                if (this.options.async === true) {
                    initAsyncCompiler().then((compiler) => {
                        this.compiler.async = compiler;
                        this.initialized = true;
                        resolve("Compiler initialized.")
                    }).catch((e) => {
                        reject(e);
                    });
                } else {
                    this.compiler.sync = initCompiler();
                    this.initialized = true;
                    resolve("Compiler initialized.")
                }
            }
        });
    }

    dispose() {
        if (this.initialized) {
            this.compiler.async?.dispose();
            this.compiler.sync?.dispose();
        } else {
            throw 'Compiler not initialized, therefore could not dispose.';
        }
    }

    watch() {
        if (this.source.length > 0) {
            const toWatch = globSync(this.source!.split(','));
            chokidar
                .watch(toWatch, {
                    usePolling: this.options.poll !== undefined,
                    interval: typeof this.options.poll === 'number' ? this.options.poll : 100,
                    ignoreInitial: true,
                    awaitWriteFinish: {
                        stabilityThreshold: 1500,
                        pollInterval: 100
                    }
                })
                .on('change', (changed) => {
                    console.log(`File changed: ${changed}`);

                    this.getFilesToRender(changed).then((filesToRender) => {
                        filesToRender.forEach((fileName) => {
                            this.render(fileName);
                        })
                    });
                })
                .on('add', (added) => { // TODO limit to 1 per second.
                    console.log(`File added: ${added}`);

                    // Clear out old info.
                    sources.clearSourcesChecker();
                    this.renderAll();
                });
        }
    }

    render(fileNameOrString: string = ''): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.usingStdin === false) {
                console.log(`Rendering ${fileNameOrString}...`);
            }

            const destination = fileFinder.buildDestinationPath(
                fileNameOrString,
                this.options.output,
                this.options.dir,
                this.options.base,
                this.options.ext,
                this.usingStdin
            );

            this.renderSass(fileNameOrString).then((sassResult) => {
                this.renderPost(fileNameOrString, destination, sassResult).then((postedResult) => {
                    this.writeOut(postedResult, destination).then(() => {
                        resolve("File rendered and written successfully.");
                    });
                }).catch((err) => {
                    if (destination !== '') {
                        console.log(color.red(err));
                    } else {
                        process.stderr.write(err);
                    }
                    resolve("Error in file.");
                });
            }).catch((e) => {
                this.sassErrorOut(e, destination);
                resolve("Error in file.");
            });
        });
    }

    renderAll(): Promise<string> {
        return new Promise((resolve, reject) => {
            const filesToRender = this.entries.filter((fileName) => path.basename(fileName).charAt(0) !== '_');
            let rendered = 0;
            filesToRender.forEach((fileName) => {
                this.render(fileName).then(() => {
                    rendered++;
                    if (rendered == filesToRender.length) {
                        resolve("All files rendered");
                    }
                });
            })
        });
    }

    private renderSass(fileNameOrString: string): Promise<CompileResult> {
        return new Promise((resolve, reject) => {
            if (this.compiler.async) {
                const options: Options<"async"> = configs.generateSassOptionsAsync(this.options);
                if (this.usingStdin === false) {
                    this.compiler.async.compileAsync(fileNameOrString, options).then((result) => {
                        sources.addResultToSourcesChecker(fileNameOrString, result);
                        resolve(result);
                    }).catch((err) => {
                        reject(err);
                    });
                } else {
                    this.compiler.async.compileStringAsync(fileNameOrString, options).then((result) => {
                        resolve(result);
                    }).catch((err) => {
                        reject(err);
                    });
                }
            } else if (this.compiler.sync) {
                try {
                    const options: Options<"sync"> = configs.generateSassOptions(this.options);
                    if (this.usingStdin === false) {
                        const result = this.compiler.sync.compile(fileNameOrString, options);
                        sources.addResultToSourcesChecker(fileNameOrString, result);
                        resolve(result);
                    } else {
                        const result = this.compiler.sync.compileString(fileNameOrString, options);
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            }
        });
    }

    private renderPost(fileNameOrString: string, destination: string, sassResult: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let postcssMapOptions: any = {
                annotation: true,
                prev: sassResult.sourceMap,
                inline: this.options.embedSourceMap === true ? true : false,
                absolute: this.options.sourceMapUrls === 'absolute' ? true : false,
                sourcesContent: this.options.embedSources === true ? true : false,
            };

            if (this.usingStdin === true || this.options.sourceMap === false) {
                postcssMapOptions = false;
            }

            postcss(postcssConfig.plugins)
                .process(sassResult.css.toString(), {
                    from: fileNameOrString,
                    to: destination,
                    map: postcssMapOptions
                })
                .then((postedResult) => {
                    resolve(postedResult);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    private getFilesToRender(fileChanged: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            let filesToRender: string[] = [];
            if (path.basename(fileChanged).charAt(0) !== '_') {
                filesToRender.push(fileChanged);
                resolve(filesToRender);
            } else {
                let partialExistsInSassSources = false;
                let ind = 0;
                while (ind < sources.getChecker().length) {
                    const toCheck = sources.getChecker()[ind];

                    if (toCheck?.containsPartial(fileChanged)) {
                        partialExistsInSassSources = true;
                        filesToRender.push(toCheck.getMain());
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
                    fileFinder.getAllFilesPathsFromSources(this.source.split(','), (entries) => {
                        entries.forEach((entry) => {
                            filesToRender.push(entry);
                            resolve(filesToRender);
                        });
                    });
                } else {
                    resolve(filesToRender);
                }
            }
        });
    }

    private sassErrorOut(e: any, destination: string) {
        if (destination !== '') {
            console.log(e.message);
            try {
                fs.mkdirSync(path.dirname(destination), {
                    recursive: true
                });
            } catch (mkDirErr: any) {
                if (mkDirErr.code !== 'EEXIST' || mkDirErr.code !== 'EISDIR') throw mkDirErr;
            }

            if (this.options.errorCss !== false) {
                fs.writeFile(destination, this.emitSassError(e), (writeFileErr) => {
                    // throws an error, you could also catch it here
                    if (writeFileErr) throw writeFileErr;

                    // success case, the file was saved
                    console.log(color.yellow(`Emitted error to ${destination}`));
                });
            }
        } else {
            process.stderr.write(e.message);
        }

        if (this.options.watch && (process.exitCode == null || process.exitCode === 0)) {
            process.exitCode = 1;
        }
    }

    /**
     * Build a new CSS file that contains the error and puts its content in the body.
     * @param {*} err
     */
    private emitSassError(err: any) {
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

    private writeOut(postedResult: postcss.Result<postcss.Root>, destination: string): Promise<string> {
        return new Promise((resolve, reject) => {
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
                        resolve("Written to file.");
                    }
                });

                if (postedResult.map) {
                    fs.writeFile(destination + '.map', postedResult.map.toString(), (err) => {
                        if (err) {
                            throw err;
                        } else {
                            resolve("Written to file.");
                        };
                    });
                }
            } else {
                process.stdout.write(postedResult.css);
                resolve("Written to file.");
            }
        });
    }
}

sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action((source: string[]) => {
        //If user specifies --use, we ignore postcss config files.
        if (sheetloaf.opts().use) {
            postcssConfig = configs.generatePostcssConfigFromUse(sheetloaf.opts().use);
        } else {
            postcssConfig = configs.generatePostcssConfigFromFile(sheetloaf.opts().config);
        }
        const compiler = new CompWrapper();

        // If source is provided, we ignore pipes.
        if (source.length > 0 && source[0]) {
            compiler.init(sheetloaf.opts(), source[0]).then(() => {
                compiler.renderAll().then(() => {
                    if (sheetloaf.opts().watch) {
                        compiler.watch();
                    } else {
                        compiler.dispose();
                    }
                });
            });
        } else if (!process.stdin.isTTY) {
            compiler.init(sheetloaf.opts()).then(() => {
                //see github.com/tj/commander.js/issues/137
                let stdin = '';
                process.stdin.on('readable', () => {
                    var chunk = process.stdin.read();
                    if (chunk !== null) {
                        stdin += chunk;
                    }
                });
                process.stdin.on('end', () => {
                    compiler.render(stdin).then(() => {
                        compiler.dispose();
                    });
                });
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
        'Controls how the source maps that Sass generates link back to the Sass files that contributed to the generated CSS. ["relative", "absolute"]',
        'relative'
    )
    .option('--error-css', 'Emit a CSS file when an error occurs during compilation (this is the default option).')
    .option('--no-error-css', 'Do not emit a CSS file when an error occurs during compilation.')
    .option('--silence-deprecation <TYPE>', 'This option tells Sass to silence a particular type of deprecation.')
    .option('-I, --load-path <PATHS>', 'Adds an additional load path for Sass to look for stylesheets.')
    .option('-p, --pkg-importer <TYPE>', `Built-in importer(s) to use for pkg: URLs.\n[node] - Load files like Node.js package resolution.`)
    .option('-w, --watch', 'Watch stylesheets and recompile when they change.')
    .option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
    .option('--poll [DURATION]', 'Use polling for file watching. Can optionally pass polling interval; default 100 ms')
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.')
    .option('--async', `Use sass' asynchronous API. This may be slower.`);
sheetloaf.parse(process.argv);

