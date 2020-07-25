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

        //Using fs.stat() to check for the existence of a file before calling fs.open(), fs.readFile() or fs.writeFile() is not recommended. Instead, user code should open/read/write the file directly and handle the error raised if the file is not available.

        fs.stat(path.resolve(process.cwd(), './test/dist/'), function (err, stats) {
            if (err === null) {
                console.log('directory exists!');
            } else {
                fs.mkdir(path.resolve(process.cwd(), './test/dist/'), (err) => {
                    //if (err) throw err;
                    if (err) {
                        console.log('lol, error');
                    }
                });
            }

            fs.writeFile(destination, result, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;

                // success case, the file was saved
                console.log('Lyric saved!');
            });
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


