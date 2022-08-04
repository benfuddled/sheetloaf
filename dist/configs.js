"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSassOptionsAsync = exports.generateSassOptions = exports.generatePostcssConfig = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function generatePostcssConfig(configArg = '', use) {
    let obj = {
        plugins: []
    };
    if (use) {
        use.split(',').forEach(function (plugin) {
            obj.plugins.push(require(plugin));
        });
    }
    else {
        let configFileLoc = path_1.default.resolve(process.cwd(), configArg, 'postcss.config.js');
        try {
            fs_1.default.lstatSync(configFileLoc);
            obj = require(configFileLoc);
        }
        catch (e) {
        }
    }
    return obj;
}
exports.generatePostcssConfig = generatePostcssConfig;
function generateSassOptions(opts) {
    return {
        style: opts.style,
        loadPaths: opts.loadPath ? opts.loadPath.split(',') : [],
        sourceMap: opts.sourceMap === false ? false : true,
        sourceMapIncludeSources: opts.sourceMap === false ? false : true
    };
}
exports.generateSassOptions = generateSassOptions;
function generateSassOptionsAsync(opts) {
    return {
        style: opts.style,
        loadPaths: opts.loadPath ? opts.loadPath.split(',') : [],
        sourceMap: opts.sourceMap === false ? false : true,
        sourceMapIncludeSources: opts.sourceMap === false ? false : true
    };
}
exports.generateSassOptionsAsync = generateSassOptionsAsync;
//# sourceMappingURL=configs.js.map