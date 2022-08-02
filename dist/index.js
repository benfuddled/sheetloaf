#!/usr/bin/env node
"use strict";
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
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var picomatch_1 = __importDefault(require("picomatch"));
var fast_glob_1 = __importDefault(require("fast-glob"));
var sheetloaf = new commander_1.Command();
sheetloaf.version("1.2.0", '-v, --version', 'Print the version of Sheetloaf.');
var usingStdin = false;
sheetloaf
    .arguments('[sources...]')
    .description('📃🍞 Compile Sass to CSS and transform the output using PostCSS, all in one command.')
    .action(function (source) {
    main(source);
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
function main(source) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expandGlob(source[0].split(','), function (entries) {
                console.log(entries);
            });
            return [2];
        });
    });
}
function expandGlob(input, callback) {
    var expanded = [];
    var index = 0;
    var _loop_1 = function (i) {
        var isGlob = false;
        var isDir = false;
        var isFile = false;
        isGlob = picomatch_1["default"].scan(input[index]).isGlob;
        if (isGlob === false) {
            try {
                isDir = fs_1["default"].lstatSync(path_1["default"].normalize(input[index])).isDirectory();
                isFile = fs_1["default"].lstatSync(path_1["default"].normalize(input[index])).isFile();
            }
            catch (err) {
                throw err;
            }
        }
        if (isGlob || isFile) {
            var files = fast_glob_1["default"]
                .sync(input[index], {
                dot: true
            })
                .map(function (entry) { return path_1["default"].normalize(entry); });
            expanded.push.apply(expanded, files);
        }
        else if (isDir) {
            var dir_1 = input[index];
            fs_1["default"].readdir(dir_1, function (err, files) {
                if (err) {
                    throw err;
                }
                else {
                    files.forEach(function (file) {
                        var fullname = path_1["default"].join(dir_1, file);
                        if (!fs_1["default"].lstatSync(fullname).isDirectory()) {
                            expanded.push(fullname);
                        }
                    });
                }
            });
        }
    };
    for (var i = 0; i < input.length; i++) {
        _loop_1(i);
    }
    callback(expanded);
}
//# sourceMappingURL=index.js.map