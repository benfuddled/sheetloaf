#!/usr/bin/env node

import { Command, type OptionValues } from 'commander';
import chokidar from 'chokidar';
import color from 'picocolors';
import fs from 'fs';
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

let compiler: CompWrapper;

interface CWrap {
    sync?: Compiler;
    async?: AsyncCompiler;
}

class CompWrapper {
    private initialized: boolean = false;
    private usingStdin: boolean = false;
    private options: OptionValues;
    private compiler: CWrap = {};

    init(options: OptionValues, usingStdin: boolean): Promise<string> {
        this.options = options;
        this.usingStdin = usingStdin;
        return new Promise((resolve, reject) => {
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
    }

    dispose() {
        if (this.initialized) {
            this.compiler.async?.dispose();
            this.compiler.async?.dispose();
        } else {
            throw 'Compiler not initialized, therefore could not dispose.';
        }
    }

    render(fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            console.log(`Rendering ${fileName}...`);

            const destination = fileFinder.buildDestinationPath(
                fileName,
                this.options.output,
                this.options.dir,
                this.options.base,
                this.options.ext,
                this.usingStdin
            );

            this.renderSass(fileName).then((sassResult) => {
                this.renderPost(fileName, destination, sassResult).then((postedResult) => {
                    this.writeOut(postedResult, destination);
                }).catch((err) => {
                    if (destination !== '') {
                        console.log(color.red(err));
                    } else {
                        process.stderr.write(err);
                    }
                });
            }).catch((e) => {
                this.sassErrorOut(e, destination);
            });
        });
    }

    private renderSass(fileName: string): Promise<CompileResult> {
        return new Promise((resolve, reject) => {
            if (this.compiler.async) {
                const options: Options<"async"> = configs.generateSassOptionsAsync(this.options);
                this.compiler.async.compileAsync(fileName, options).then((result) => {
                    sources.addResultToSourcesChecker(fileName, result);
                    resolve(result);
                }).catch((err) => {
                    reject(err);
                });
            } else if (this.compiler.sync) {
                try {
                    const options: Options<"sync"> = configs.generateSassOptions(this.options);
                    const result = this.compiler.sync.compile(fileName, options);
                    sources.addResultToSourcesChecker(fileName, result);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }
        });
    }

    private renderPost(fileName: string, destination: string, sassResult: any): Promise<any> {
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
                    from: fileName,
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

    private writeOut(postedResult: postcss.Result<postcss.Root>, destination: string) {
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
    }
}

function watch(source: string[]) {
    return null;
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
        compiler = new CompWrapper();

        // If source is provided, we ignore pipes.
        if (source.length > 0 && source[0]) {
            compiler.init(sheetloaf.opts(), false);
            fileFinder.getAllFilesPathsFromSources(source[0].split(','), (entries: string[]) => {
                const filesToRender = entries.filter((fileName) => path.basename(fileName).charAt(0) !== '_');
                let rendered = 0;
                filesToRender.forEach((fileName) => {
                    compiler.render(fileName).then(() => {
                        rendered++;
                        if (rendered == filesToRender.length) {
                            if (sheetloaf.opts().watch === true) {
                                watch(source);
                            } else {
                                compiler.dispose();
                            }
                        }
                    });
                })
            });
        } else if (!process.stdin.isTTY) {
            //compiler.init(sheetloaf.opts(), true);
            // see github.com/tj/commander.js/issues/137
            // let stdin = '';
            // process.stdin.on('readable', () => {
            //     var chunk = process.stdin.read();
            //     if (chunk !== null) {
            //         stdin += chunk;
            //     }
            // });
            // process.stdin.on('end', () => {
            //     usingStdin = true;
            //     renderSassFromStdin(stdin);
            // });
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

