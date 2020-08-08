const path = require('path');
const fs = require('fs');
const picomatch = require('picomatch');

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

exports.parseDestination = parseDestination;