#!/usr/bin/env node
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

// Skip the first two, I don't care.
const args = process.argv.slice(2);

const minified = false;

console.log("Hello!");
console.log(`Input given was ${args[0]}`);
console.log(`All args are: ${args}`);

var destination = './test/dist/';  //'./test/thing.scss'

console.log(`command executed from: ${process.cwd()}`);
console.log(`resolved path: ${path.resolve(process.cwd(), 'test/**/*.scss')}`);

let entries = fg.sync([path.resolve(process.cwd(), 'test/**/*.scss')], { dot: true });
console.log(`globbed entries: ${entries}`);

entries.forEach(function (filename) {
    if (path.basename(filename).charAt(0) !== '_') {
        renderSheet(filename);
    }
});

function renderSheet(filename) {
    let destination = path.resolve(process.cwd(), './test/dist/', path.basename(filename, '.scss') + '.css');
    sass.render({
        file: filename,
        sourceMap: true,
        sourceMapEmbed: true,
        outFile: destination,
        outputStyle: (minified ? 'compressed' : 'expanded')
    }, function (err, result) {

        try {
            fs.mkdirSync(path.dirname(destination), { recursive: true });
        } catch (err) {
            if (err.code !== 'EEXIST') throw err
        }

        fs.writeFile(destination, result.css, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('file saved!');
        });
    });
}


// sass.render({
//     file: args[0],
//     sourceMap: true,
//     sourceMapEmbed: true,
//     outFile: destination
// }, function (err, result) {
//     console.log(result);
// });

/*if (args.includes('--watch') || args.includes('-w')) {
    console.log(`I'd watch your file if that feature was included.`)
}

if (args.includes('--dir') || args.includes('-d')) {
    let dir = args[(args.indexOf('--dir') !== -1 ? args.indexOf('--dir') + 1 : args.indexOf('-d') + 1)];
    console.log(`I'd output your file to ${dir} that feature was included.`)
}*/


