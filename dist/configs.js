"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSassOptionsAsync = exports.generateSassOptions = exports.generatePostcssConfigFromUse = exports.generatePostcssConfigFromFile = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function generatePostcssConfigFromFile(configPath = '') {
    let obj = {
        plugins: []
    };
    let configFileLoc = path_1.default.resolve(process.cwd(), configPath, 'postcss.config.js');
    try {
        fs_1.default.lstatSync(configFileLoc);
        obj = require(configFileLoc);
    }
    catch (e) {
        console.log(`No postcss.config.js file found at location ${configPath}`);
    }
    return obj;
}
exports.generatePostcssConfigFromFile = generatePostcssConfigFromFile;
function generatePostcssConfigFromUse(useArg) {
    let obj = {
        plugins: []
    };
    useArg.split(',').forEach(function (plugin) {
        obj.plugins.push(require(plugin));
    });
    return obj;
}
exports.generatePostcssConfigFromUse = generatePostcssConfigFromUse;
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