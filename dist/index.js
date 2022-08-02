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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = require("commander");
var chokidar_1 = __importDefault(require("chokidar"));
var picocolors_1 = __importDefault(require("picocolors"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sass_1 = __importDefault(require("sass"));
var postcss_1 = __importDefault(require("postcss"));
var configs = __importStar(require("./configs"));
var fileFinder = __importStar(require("./fileFinder"));
var sheetloaf = new commander_1.Command();
sheetloaf.version("1.2.0", '-v, --version', 'Print the version of Sheetloaf.');
var usingStdin = false;
var postcssConfig = {
    plugins: []
};
sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action(function (source) {
    postcssConfig = configs.generatePostcssConfig(sheetloaf.opts().config, sheetloaf.opts().use);
    if (source.length > 0) {
        renderAllFiles(source);
        watch(source);
    }
    else if (!process.stdin.isTTY) {
        var stdin_1 = '';
        process.stdin.on('readable', function () {
            var chunk = process.stdin.read();
            if (chunk !== null) {
                stdin_1 += chunk;
            }
        });
        process.stdin.on('end', function () {
            usingStdin = true;
            renderSassFromStdin(stdin_1);
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
    .option('--async', "Use sass' asynchronous API. This may be slower.");
sheetloaf.parse(process.argv);
function renderAllFiles(source) {
    fileFinder.expandGlob(source[0].split(','), function (entries) {
        entries.forEach(function (fileName) {
            if (path_1["default"].basename(fileName).charAt(0) !== '_') {
                renderSass(fileName);
            }
        });
    });
}
function watch(source) {
    if (sheetloaf.opts().watch === true) {
        chokidar_1["default"]
            .watch(source[0].split(','), {
            usePolling: sheetloaf.opts().poll !== undefined,
            interval: typeof sheetloaf.opts().poll === 'number' ? sheetloaf.opts().poll : 100,
            ignoreInitial: true,
            awaitWriteFinish: {
                stabilityThreshold: 1500,
                pollInterval: 100
            }
        })
            .on('change', function (changed) {
            console.log("File changed: ".concat(changed));
            renderAllFiles(source);
        })
            .on('add', function (added) {
            console.log("File added: ".concat(added));
            renderAllFiles(source);
        });
    }
}
function renderSass(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var destination, options, result, options, result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    destination = fileFinder.buildDestinationPath(fileName, sheetloaf.opts().output, sheetloaf.opts().dir, sheetloaf.opts().base, sheetloaf.opts().ext, usingStdin);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    if (!(sheetloaf.opts().async === true)) return [3, 3];
                    options = configs.generateSassOptionsAsync(sheetloaf.opts());
                    return [4, sass_1["default"].compileAsync(fileName, options)];
                case 2:
                    result = _a.sent();
                    renderPost(fileName, destination, result);
                    return [3, 4];
                case 3:
                    options = configs.generateSassOptions(sheetloaf.opts());
                    result = sass_1["default"].compile(fileName, options);
                    renderPost(fileName, destination, result);
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    e_1 = _a.sent();
                    sassErrorCatcher(e_1, destination);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
function renderSassFromStdin(text) {
    return __awaiter(this, void 0, void 0, function () {
        var destination, options, result, options, result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    destination = fileFinder.buildDestinationPath('', sheetloaf.opts().output, sheetloaf.opts().dir, sheetloaf.opts().base, sheetloaf.opts().ext, usingStdin);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    if (!(sheetloaf.opts().async === true)) return [3, 3];
                    options = configs.generateSassOptionsAsync(sheetloaf.opts());
                    return [4, sass_1["default"].compileStringAsync(text, options)];
                case 2:
                    result = _a.sent();
                    renderPost('', destination, result);
                    return [3, 4];
                case 3:
                    options = configs.generateSassOptions(sheetloaf.opts());
                    result = sass_1["default"].compileString(text, options);
                    renderPost('', destination, result);
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    e_2 = _a.sent();
                    sassErrorCatcher(e_2, destination);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
function renderPost(fileName, destination, sassResult) {
    var postcssMapOptions = {
        annotation: true,
        prev: sassResult.sourceMap,
        inline: sheetloaf.opts().embedSourceMap === true ? true : false,
        absolute: sheetloaf.opts().sourceMapUrls === 'absolute' ? true : false,
        sourcesContent: sheetloaf.opts().embedSources === true ? true : false
    };
    if (usingStdin === true || sheetloaf.opts().sourceMap === false) {
        postcssMapOptions = false;
    }
    (0, postcss_1["default"])(postcssConfig.plugins)
        .process(sassResult.css.toString(), {
        from: fileName,
        to: destination,
        map: postcssMapOptions
    })
        .then(function (postedResult) {
        postedResult.warnings().forEach(function (warn) {
            process.stderr.write(warn.toString());
        });
        if (destination !== '') {
            try {
                fs_1["default"].mkdirSync(path_1["default"].dirname(destination), {
                    recursive: true
                });
            }
            catch (err) {
                if (err.code !== 'EEXIST' || err.code !== 'EISDIR')
                    throw err;
            }
            fs_1["default"].writeFile(destination, postedResult.css, function (err) {
                if (err)
                    throw err;
                console.log(picocolors_1["default"].green("Successfully written to ".concat(destination)));
            });
            if (postedResult.map) {
                fs_1["default"].writeFile(destination + '.map', postedResult.map.toString(), function (err) {
                    if (err)
                        throw err;
                });
            }
        }
        else {
            process.stdout.write(postedResult.css);
        }
    })["catch"](function (err) {
        if (destination !== '') {
            console.log(picocolors_1["default"].red(err));
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
            fs_1["default"].mkdirSync(path_1["default"].dirname(destination), {
                recursive: true
            });
        }
        catch (mkDirErr) {
            if (mkDirErr.code !== 'EEXIST' || mkDirErr.code !== 'EISDIR')
                throw mkDirErr;
        }
        if (sheetloaf.opts().errorCss !== false) {
            fs_1["default"].writeFile(destination, emitSassError(e), function (writeFileErr) {
                if (writeFileErr)
                    throw writeFileErr;
                console.log(picocolors_1["default"].yellow("Emitted error to ".concat(destination)));
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
    var span = err.span.toString().replace(/'.*'/i, '');
    var message = err.sassMessage.toString().replace(/'.*'/i, '');
    var css = "\n        body:before { \n            content: 'Error from ".concat(span, "';\n            display: table;\n            background-color:#cc0000;\n            color:white;\n            border-radius:5px;\n            margin-bottom:5px;\n            padding:5px;\n            font-family:sans-serif\n        }\n        body:after { \n            content: \"").concat(message, "\";\n            display: table;\n            background-color:#0e70b0;\n            color:white;\n            border-radius:5px;\n            padding:5px;\n            margin-bottom: 5px;\n            font-family:sans-serif\n        }\n        body * { display: none; }\n    ");
    return css;
}
//# sourceMappingURL=index.js.map