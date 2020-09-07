const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const picomatch = require('picomatch');

function expandGlob(input, index = 0, callback) {

    let arrHousing = [];

    for (i = 0; i < input.length; i++) {

        if (!picomatch.scan(input[i]).isGlob && fs.lstatSync(path.resolve(process.cwd(), input[i])).isDirectory()) {

            let dir = input[i];

            fs.readdir(dir, (err, files) => {
                if (err) {
                    throw err;
                } else {
                    let filesInDir = [];
                    files.forEach(file => {

                        let fullname = path.resolve(process.cwd(), dir, file);
                        if (!fs.lstatSync(fullname).isDirectory()) {
                            filesInDir.push(fullname);
                        }
                    });
                    arrHousing.push(...filesInDir);
                }
            });
        } else {
            let expandedGlob = fg.sync(input[i], { dot: true }).map(entry => path.resolve(process.cwd(), entry));
            arrHousing.push(...expandedGlob);
        }
        /*if (i = 1) {
            input.splice(1, 1, 'hurrrrr');
        }*/
    }

    console.log(arrHousing);
    console.log('00000000000000000000000000000000000000');
    setTimeout(function() {
        console.log(arrHousing);
        callback(input);
    }, 6000);
    /*setTimeout(function() {
        callback(input);
    }, 1000);*/
}

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
exports.getPostCSSConfig = getPostCSSConfig;