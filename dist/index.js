#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chokidar_1 = __importDefault(require("chokidar"));
const picocolors_1 = __importDefault(require("picocolors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sass_1 = __importDefault(require("sass"));
const postcss_1 = __importDefault(require("postcss"));
const configs = __importStar(require("./configs"));
const fileFinder = __importStar(require("./fileFinder"));
const sheetloaf = new commander_1.Command();
sheetloaf.version("1.2.0", '-v, --version', 'Print the version of Sheetloaf.');
let usingStdin = false;
let postcssConfig = {
    plugins: []
};
sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action((source) => {
    if (sheetloaf.opts().use) {
        postcssConfig = configs.generatePostcssConfigFromUse(sheetloaf.opts().use);
    }
    else {
        postcssConfig = configs.generatePostcssConfigFromFile(sheetloaf.opts().config);
    }
    if (source.length > 0) {
        renderAllFiles(source);
        watch(source);
    }
    else if (!process.stdin.isTTY) {
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
    .option('--base <DIR>', 'Mirror the directory structure relative to this path in the output directory, for use with --dir.', '')
    .option('--ext <EXTENSION>', 'Override the output file extension; for use with --dir', '.css')
    .option('-s, --style <NAME>', 'Output style. ["expanded", "compressed"]', 'expanded')
    .option('--source-map', 'Generate a source map (this is the default option).')
    .option('--no-source-map', 'Do not generate a source map.')
    .option('--embed-source-map', 'Embed the contents of the source map file in the generated CSS, rather than creating a separate file and linking to it from the CSS.')
    .option('--embed-sources', 'Embed the entire contents of the Sass files that contributed to the generated CSS in the source map.')
    .option('--source-map-urls <TYPE>', 'Controls how the source maps that Sass generates link back to the Sass files  that contributed to the generated CSS. ["relative", "absolute"]', 'relative')
    .option('--error-css', 'Emit a CSS file when an error occurs during compilation (this is the default option).')
    .option('--no-error-css', 'Do not emit a CSS file when an error occurs during compilation.')
    .option('-I, --load-path <PATHS>', 'Adds an additional load path for Sass to look for stylesheets.')
    .option('-w, --watch', 'Watch stylesheets and recompile when they change.')
    .option('--config <LOCATION>', 'Set a custom directory to look for a postcss config file.')
    .option('--poll [DURATION]', 'Use polling for file watching. Can optionally pass polling interval; default 100 ms')
    .option('-u, --use <PLUGINS>', 'List of postcss plugins to use. Will cause sheetloaf to ignore any config files.')
    .option('--async', `Use sass' asynchronous API. This may be slower.`);
sheetloaf.parse(process.argv);
function renderAllFiles(source) {
    fileFinder.getAllFilesPathsFromSources(source[0].split(','), function (entries) {
        entries.forEach(function (fileName) {
            if (path_1.default.basename(fileName).charAt(0) !== '_') {
                renderSass(fileName);
            }
        });
    });
}
function watch(source) {
    if (sheetloaf.opts().watch === true) {
        chokidar_1.default
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
            renderAllFiles(source);
        })
            .on('add', (added) => {
            console.log(`File added: ${added}`);
            renderAllFiles(source);
        });
    }
}
function renderSass(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const destination = fileFinder.buildDestinationPath(fileName, sheetloaf.opts().output, sheetloaf.opts().dir, sheetloaf.opts().base, sheetloaf.opts().ext, usingStdin);
        try {
            if (sheetloaf.opts().async === true) {
                const options = configs.generateSassOptionsAsync(sheetloaf.opts());
                const result = yield sass_1.default.compileAsync(fileName, options);
                renderPost(fileName, destination, result);
            }
            else {
                const options = configs.generateSassOptions(sheetloaf.opts());
                const result = sass_1.default.compile(fileName, options);
                renderPost(fileName, destination, result);
            }
        }
        catch (e) {
            sassErrorCatcher(e, destination);
        }
    });
}
function renderSassFromStdin(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const destination = fileFinder.buildDestinationPath('', sheetloaf.opts().output, sheetloaf.opts().dir, sheetloaf.opts().base, sheetloaf.opts().ext, usingStdin);
        try {
            if (sheetloaf.opts().async === true) {
                const options = configs.generateSassOptionsAsync(sheetloaf.opts());
                const result = yield sass_1.default.compileStringAsync(text, options);
                renderPost('', destination, result);
            }
            else {
                const options = configs.generateSassOptions(sheetloaf.opts());
                const result = sass_1.default.compileString(text, options);
                renderPost('', destination, result);
            }
        }
        catch (e) {
            sassErrorCatcher(e, destination);
        }
    });
}
function renderPost(fileName, destination, sassResult) {
    let postcssMapOptions = {
        annotation: true,
        prev: sassResult.sourceMap,
        inline: sheetloaf.opts().embedSourceMap === true ? true : false,
        absolute: sheetloaf.opts().sourceMapUrls === 'absolute' ? true : false,
        sourcesContent: sheetloaf.opts().embedSources === true ? true : false,
    };
    if (usingStdin === true || sheetloaf.opts().sourceMap === false) {
        postcssMapOptions = false;
    }
    (0, postcss_1.default)(postcssConfig.plugins)
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
                fs_1.default.mkdirSync(path_1.default.dirname(destination), {
                    recursive: true
                });
            }
            catch (err) {
                if (err.code !== 'EEXIST' || err.code !== 'EISDIR')
                    throw err;
            }
            fs_1.default.writeFile(destination, postedResult.css, (err) => {
                if (err)
                    throw err;
                console.log(picocolors_1.default.green(`Successfully written to ${destination}`));
            });
            if (postedResult.map) {
                fs_1.default.writeFile(destination + '.map', postedResult.map.toString(), (err) => {
                    if (err)
                        throw err;
                });
            }
        }
        else {
            process.stdout.write(postedResult.css);
        }
    })
        .catch((err) => {
        if (destination !== '') {
            console.log(picocolors_1.default.red(err));
        }
        else {
            process.stderr.write(err);
        }
    });
}
function sassErrorCatcher(e, destination) {
    if (destination !== '') {
        console.log(e.message);
        try {
            fs_1.default.mkdirSync(path_1.default.dirname(destination), {
                recursive: true
            });
        }
        catch (mkDirErr) {
            if (mkDirErr.code !== 'EEXIST' || mkDirErr.code !== 'EISDIR')
                throw mkDirErr;
        }
        if (sheetloaf.opts().errorCss !== false) {
            fs_1.default.writeFile(destination, emitSassError(e), (writeFileErr) => {
                if (writeFileErr)
                    throw writeFileErr;
                console.log(picocolors_1.default.yellow(`Emitted error to ${destination}`));
            });
        }
    }
    else {
        process.stderr.write(e.message);
    }
    if (!sheetloaf.opts().watch && (process.exitCode == null || process.exitCode === 0)) {
        process.exitCode = 1;
    }
}
function emitSassError(err) {
    const span = err.span.toString().replace(/'.*'/i, '');
    const message = err.sassMessage.toString().replace(/'.*'/i, '');
    let css = `
        body:before { 
            content: 'Error from ${span}';
            display: table;
            background-color:#cc0000;
            color:white;
            border-radius:5px;
            margin-bottom:5px;
            padding:5px;
            font-family:sans-serif
        }
        body:after { 
            content: "${message}";
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
//# sourceMappingURL=index.js.map