const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const picomatch = require('picomatch');

/**
 * Given an array of input sources, expand any globs and validate that inputs exist.
 * 
 * @param {*} input 
 * @param {*} callback 
 * @param {*} index 
 * @param {*} expanded 
 */
function expandGlob(input, callback, index = 0, expanded = []) {

    if (index < input.length) {
        let isGlob = false;
        let isDir = false;
        let isFile = false;

        isGlob = picomatch.scan(input[index]).isGlob;

        if (isGlob === false) {
            try {
                isDir = fs.lstatSync(path.resolve(process.cwd(), input[index])).isDirectory();
                isFile = fs.lstatSync(path.resolve(process.cwd(), input[index])).isFile();
            } catch (err) {
                throw (err);
            }
        }

        if (isGlob || isFile) {
            let files = fg.sync(input[index], { dot: true }).map(entry => path.resolve(process.cwd(), entry));
            expanded.push(...files);

            index = index + 1;
            expandGlob(input, callback, index, expanded);
        } else if (isDir) {
            let dir = input[index];

            fs.readdir(dir, (err, files) => {
                if (err) {
                    throw err;
                } else {
                    files.forEach(file => {

                        let fullname = path.resolve(process.cwd(), dir, file);
                        if (!fs.lstatSync(fullname).isDirectory()) {
                            expanded.push(fullname);
                        }
                    });

                    index = index + 1;
                    expandGlob(input, callback, index, expanded);
                }
            });
        }

    } else {
        callback(expanded);
    }
}

exports.expandGlob = expandGlob;


/*
// These will most likely be done away with
async function parseInput(input, callback) {
    
    if (!picomatch.scan(input).isGlob && fs.lstatSync(path.resolve(process.cwd(), input)).isDirectory()) {
        fs.readdir(input, (err, files) => {
            if (err) {
                throw err;
            } else {
                files.forEach(file => {
                    let fullname = path.resolve(process.cwd(), input, file);
                    if (!fs.lstatSync(fullname).isDirectory()) {
                        entries.push(fullname);
                    }
                });
                callback(entries);
            }
        });
    } else {
        entries = fg.sync([input], { dot: true }).map(entry => path.resolve(process.cwd(), entry));
        callback(entries);
    }
}
// This too
function parseDestination(filename, source, dest) {
    if (picomatch.scan(source).isGlob || fs.lstatSync(path.resolve(process.cwd(), source)).isDirectory()) {
        console.log(1);
        let dirFromGlob = path.relative(picomatch.scan(source).base, path.dirname(filename));

        let basename;
        if (picomatch.scan(dest).isGlob) {
            basename = path.basename(filename, path.extname(filename)) + path.extname(dest);
        } else {
            basename = path.basename(filename, path.extname(filename)) + '.css';
        }

        return path.resolve(process.cwd(), picomatch.scan(dest).base, dirFromGlob, basename);

    } else {
        // Is file
        console.log(2);
        return path.resolve(process.cwd(), dest);
    }
}

function getPostCSSConfig(loc) {
    let configLoc;
    if (loc != undefined) {
        configLoc = path.resolve(process.cwd(), loc, 'postcss.config.js');
    } else {
        configLoc = path.resolve(process.cwd(), 'postcss.config.js');
    }

    try {
        fs.lstatSync(configLoc);
        return require(configLoc);
    } catch (err) {
        return {
            plugins: []
        };
    }
}

exports.expandGlob = expandGlob;
exports.parseInput = parseInput;
exports.parseDestination = parseDestination;
exports.getPostCSSConfig = getPostCSSConfig;*/