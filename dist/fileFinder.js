"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDestinationPath = exports.getAllFilesPathsFromSources = exports.expandGlob = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const picomatch_1 = __importDefault(require("picomatch"));
const fast_glob_1 = __importDefault(require("fast-glob"));
function expandGlob(input, callback) {
    let expanded = [];
    for (let i = 0; i < input.length; i++) {
        let isGlob = false;
        let isDir = false;
        let isFile = false;
        isGlob = picomatch_1.default.scan(input[i]).isGlob;
        if (isGlob === false) {
            try {
                isDir = fs_1.default.lstatSync(path_1.default.normalize(input[i])).isDirectory();
                isFile = fs_1.default.lstatSync(path_1.default.normalize(input[i])).isFile();
            }
            catch (err) {
                throw err;
            }
        }
        if (isGlob || isFile) {
            let files = fast_glob_1.default
                .sync(input[i], {
                dot: true
            })
                .map((entry) => path_1.default.normalize(entry));
            expanded.push(...files);
            if (i === (input.length - 1)) {
                callback(expanded);
            }
        }
        else if (isDir) {
            let dir = input[i];
            fs_1.default.readdir(dir, (err, files) => {
                if (err) {
                    throw err;
                }
                else {
                    files.forEach((file) => {
                        let fullname = path_1.default.join(dir, file);
                        if (!fs_1.default.lstatSync(fullname).isDirectory()) {
                            expanded.push(fullname);
                        }
                    });
                    if (i === (input.length - 1)) {
                        callback(expanded);
                    }
                }
            });
        }
    }
}
exports.expandGlob = expandGlob;
function getAllFilesPathsFromSources(input, callback) {
    let sourcesCompleted = 0;
    let filePaths = [];
    for (let i = 0; i < input.length; i++) {
        let isGlob, isDir, isFile = false;
        isGlob = picomatch_1.default.scan(input[i]).isGlob;
        if (isGlob === true) {
            getGlobPaths(input[i], (files) => {
                filePaths.push(...files);
                sourcesCompleted++;
                if (sourcesCompleted === input.length) {
                    callback([...new Set(filePaths)].sort());
                }
            });
        }
        else {
            try {
                isDir = fs_1.default.lstatSync(path_1.default.normalize(input[i])).isDirectory();
                isFile = fs_1.default.lstatSync(path_1.default.normalize(input[i])).isFile();
                if (isFile) {
                    getGlobPaths(input[i], (files) => {
                        filePaths.push(...files);
                        sourcesCompleted++;
                        if (sourcesCompleted === input.length) {
                            callback([...new Set(filePaths)].sort());
                        }
                    });
                }
                else if (isDir) {
                    getAllFilePathsInDir(input[i], (files) => {
                        filePaths.push(...files);
                        sourcesCompleted++;
                        if (sourcesCompleted === input.length) {
                            callback([...new Set(filePaths)].sort());
                        }
                    });
                }
            }
            catch (err) {
                throw err;
            }
        }
    }
}
exports.getAllFilesPathsFromSources = getAllFilesPathsFromSources;
function getGlobPaths(glob, callback) {
    let expanded = fast_glob_1.default
        .sync(glob, {
        dot: true
    })
        .map((entry) => path_1.default.normalize(entry));
    callback(expanded);
}
function getAllFilePathsInDir(dir, callback) {
    let files = [];
    fs_1.default.readdir(dir, (err, nodes) => {
        if (err) {
            throw err;
        }
        else {
            nodes.forEach((file) => {
                let fullname = path_1.default.join(dir, file);
                if (!fs_1.default.lstatSync(fullname).isDirectory()) {
                    files.push(fullname);
                }
            });
            callback(files);
        }
    });
}
function buildDestinationPath(fileName, outFile = '', dir = '', base = '', extension = '.css', usingStdin) {
    let destination = '';
    let mirror = '';
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
                mirror = path_1.default.dirname(fileName.replace(path_1.default.join(base, '/'), ''));
            }
            destination = path_1.default.join(dir, mirror, path_1.default.basename(fileName, path_1.default.extname(fileName)) + extension);
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