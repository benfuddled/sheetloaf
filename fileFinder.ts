import fs from 'fs';
import path from 'path';
// import picomatch from 'picomatch';
import {globSync} from 'glob';

export function getAllFilesPathsFromSources(input: string[], callback: (expanded: string[]) => void) {
    let sourcesCompleted: number = 0;
    let filePaths: string[] = [];

    for (let i = 0; i < input.length; i++) {
        const result = globSync(input[i], { withFileTypes: true});

        // If user has supplied a directory, we do an extra step and read all files from directory.
        if (result.length === 1 && result[0].isDirectory()) {
            try {
                getAllFilePathsInDir(input[i], (files) => {
                    filePaths.push(...files);
                    sourcesCompleted++;
                    if (sourcesCompleted === input.length) {
                        callback([...new Set(filePaths)].sort());
                    }
                });
            } catch (err) {
                throw err;
            }
        } else {
            for (const entry of result) {
                if (entry.isFile()) {
                    filePaths.push(path.normalize(entry.relative()));
                }
            }
            sourcesCompleted++;
            if (sourcesCompleted === input.length) {
                callback([...new Set(filePaths)].sort());
            }
        }
    }
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