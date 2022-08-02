"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.buildDestinationPath = exports.expandGlob = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var picomatch_1 = __importDefault(require("picomatch"));
var fast_glob_1 = __importDefault(require("fast-glob"));
function expandGlob(input, callback) {
    var expanded = [];
    var index = 0;
    console.log('hrm');
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
        console.log(isGlob, isDir, isFile);
        if (isGlob || isFile) {
            var files = fast_glob_1["default"]
                .sync(input[index], {
                dot: true
            })
                .map(function (entry) { return path_1["default"].normalize(entry); });
            expanded.push.apply(expanded, files);
        }
        else if (isDir) {
            console.log('augh');
            var dir_1 = input[index];
            fs_1["default"].readdir(dir_1, function (err, files) {
                console.log(files);
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
exports.expandGlob = expandGlob;
function buildDestinationPath(fileName, outFile, dir, base, extension, usingStdin) {
    if (outFile === void 0) { outFile = ''; }
    if (dir === void 0) { dir = ''; }
    if (base === void 0) { base = ''; }
    if (extension === void 0) { extension = '.css'; }
    var destination = '';
    var mirror = '';
    if (usingStdin === true) {
        if (outFile.length > 0) {
            destination = outFile;
        }
        else {
            destination = '';
        }
    }
    else {
        if (dir.length > 0) {
            if (base.length > 0) {
                mirror = path_1["default"].dirname(fileName.replace(path_1["default"].join(base, '/'), ''));
            }
            destination = path_1["default"].join(dir, mirror, path_1["default"].basename(fileName, path_1["default"].extname(fileName)) + extension);
        }
        else if (outFile.length > 0) {
            destination = outFile;
        }
        else {
            destination = '';
        }
    }
    return destination;
}
exports.buildDestinationPath = buildDestinationPath;
//# sourceMappingURL=fileFinder.js.map