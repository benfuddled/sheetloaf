const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const picomatch = require('picomatch');

async function parseInput(input, callback) {
    let entries = [];
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

function parseDestination(filename, source, dest) {
    if (picomatch.scan(source).isGlob || fs.lstatSync(path.resolve(process.cwd(), source)).isDirectory()) {

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

exports.parseInput = parseInput;
exports.parseDestination = parseDestination;
exports.getPostCSSConfig = getPostCSSConfig;