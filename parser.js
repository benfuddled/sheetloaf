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
                isDir = fs.lstatSync(path.normalize(input[index])).isDirectory();
                isFile = fs.lstatSync(path.normalize(input[index])).isFile();
            } catch (err) {
                throw (err);
            }
        }

        if (isGlob || isFile) {
            let files = fg.sync(input[index], {
                dot: true
            }).map(entry => path.normalize(entry));
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

                        let fullname = path.join(dir, file);
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

/**
 * 
 * @param {*} filename 
 * @param {*} output 
 * @param {*} base 
 */
function parseDest(filename, output, base = '', extension = '.css') {
    if (path.extname(output) === '') {
        let mirror = (base !== '' ? path.dirname(filename.replace(path.join(base, '/'), '')) : '');
        return path.join(output, mirror, path.basename(filename, path.extname(filename)) + extension);
    } else {
        return output;
    }
}

function getPostCSSConfig(loc, callback) {
    let configLoc;
    if (loc != undefined) {
        configLoc = path.resolve(process.cwd(), loc, 'postcss.config.js');
        console.log(configLoc);
    } else {
        configLoc = path.resolve(process.cwd(), 'postcss.config.js');
    }

    try {
        fs.lstatSync(configLoc);
        callback(require(configLoc));
    } catch (err) {
        callback({
            plugins: []
        });
    }
}

/**
 * Build a new CSS file that contains the error and puts its content in the body.
 * @param {*} err 
 */
function emitSassError(err) {
    let singleLineErr = err.formatted.substr(0, err.formatted.indexOf('^'))
        .replace(/(\r\n|\n|\r)/gm, " ")
        .replace(/'/, "")
        .replace(/╷.*?│/, "")
        .replace(/│/, "");

    let fileName = err.file.replace(/\\/g, "/");

    let css = `body:before { content: 'Line ${err.line}: ${singleLineErr}';display: table;background-color:#cc0000;color:white;border-radius:5px;margin-bottom:5px;padding:5px;font-family:sans-serif}body:after { content: '${fileName}';display: table;background-color:#0e70b0;color:white;border-radius:5px;padding:5px;margin-bottom: 5px;font-family:sans-serif}body * { display: none; }`;

    return css;
}

exports.emitSassError = emitSassError;
exports.expandGlob = expandGlob;
exports.parseDest = parseDest;
exports.getPostCSSConfig = getPostCSSConfig;