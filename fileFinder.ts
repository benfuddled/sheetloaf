import fs from 'fs';
import path from 'path';
import picomatch from 'picomatch';
import fg from 'fast-glob';

/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 *
 */
// TODO we may have to make this recursive after all to avoid race conditions.
export function expandGlob(input: string[], callback: (expanded: string[]) => void) {
    let expanded: string[] = [];
    for (let i = 0; i < input.length; i++) {
        let isGlob = false;
        let isDir = false;
        let isFile = false;

        isGlob = picomatch.scan(input[i]).isGlob;
        if (isGlob === false) {
            try {
                isDir = fs.lstatSync(path.normalize(input[i])).isDirectory();
                isFile = fs.lstatSync(path.normalize(input[i])).isFile();
            } catch (err) {
                throw err;
            }
        }

        if (isGlob || isFile) {
            let files = fg
                .sync(input[i], {
                    dot: true
                })
                .map((entry) => path.normalize(entry));
            expanded.push(...files);
            if (i === (input.length - 1)) {
                callback(expanded);
            }
        } else if (isDir) {
            let dir = input[i];

            fs.readdir(dir, (err, files) => {
                if (err) {
                    throw err;
                } else {
                    files.forEach((file) => {
                        let fullname = path.join(dir, file);
                        if (!fs.lstatSync(fullname).isDirectory()) {
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

export function getAllFilesPathsFromSources(input: string[], callback: (expanded: string[]) => void) {
    let sourcesCompleted: number = 0;
    let filePaths: string[] = [];

    for (let i = 0; i < input.length; i++) {
        let isGlob, isDir, isFile = false;

        isGlob = picomatch.scan(input[i]).isGlob;
        if (isGlob === true) {
            getGlobPaths(input[i], (files) => {
                filePaths.push(...files);
                sourcesCompleted++;
                if (sourcesCompleted === input.length) {
                    callback([...new Set(filePaths)].sort());
                }
            });
        } else {
            try {
                isDir = fs.lstatSync(path.normalize(input[i])).isDirectory();
                isFile = fs.lstatSync(path.normalize(input[i])).isFile();

                if (isFile) {
                    getGlobPaths(input[i], (files) => {
                        filePaths.push(...files);
                        sourcesCompleted++;
                        if (sourcesCompleted === input.length) {
                            callback([...new Set(filePaths)].sort());
                        }
                    });
                } else if (isDir) {
                    getAllFilePathsInDir(input[i], (files) => {
                        filePaths.push(...files);
                        sourcesCompleted++;
                        if (sourcesCompleted === input.length) {
                            callback([...new Set(filePaths)].sort());
                        }
                    });
                }
            } catch (err) {
                throw err;
            }
        }
    }
}

function getGlobPaths(glob: string, callback: (expanded: string[]) => void) {
    let expanded = fg
        .sync(glob, {
            dot: true
        })
        .map((entry) => path.normalize(entry));
    callback(expanded);
}

function getAllFilePathsInDir(dir: string, callback: (files: string[]) => void) {
    let files: string[] = [];
    fs.readdir(dir, (err, nodes) => {
        if (err) {
            throw err;
        } else {
            nodes.forEach((file) => {
                let fullname = path.join(dir, file);
                if (!fs.lstatSync(fullname).isDirectory()) {
                    files.push(fullname);
                }
            });
            callback(files);
        }
    });
}

// TODO: returning a blank string seems super messy, this could use a refactor.
/**
 *
 * @param filename
 * @returns path, or a blank string if the combination of options provided does not give a valid path.
 */
export function buildDestinationPath(fileName: string, outFile: string = '', dir: string = '', base: string = '', extension: string = '.css', usingStdin: boolean) {
    let destination: string = '';
    let mirror: string = '';

    if (usingStdin === true) {
        if (outFile.length > 0) {
            destination = outFile;
        } else {
            destination = '';
        }
    } else {
        if (dir.length > 0) {
            if (base.length > 0) {
                mirror = path.dirname(fileName.replace(path.join(base, '/'), ''));
            }
            destination = path.join(dir, mirror, path.basename(fileName, path.extname(fileName)) + extension);
        } else if (outFile.length > 0) {
            destination = outFile;
        } else {
            destination = '';
        }
    }

    return destination;
}