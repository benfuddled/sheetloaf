#!/usr/bin/env node
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

/* LOOK INTO COMMANDER FOR CLI OPTIONS */

// Skip the first two, I don't care.
const args = process.argv.slice(2);

let sassOptions = {
    outputStyle: 'expanded'
}

const minified = false;

console.log("Hello!");

let input = args[0];
console.log(args[0], `this is the input!`);

let outputDir = '';
if (args.includes('--output') || args.includes('-o')) {
    outputDir = args[(args.indexOf('--output') !== -1 ? args.indexOf('--output') + 1 : args.indexOf('-o') + 1)];
    console.log(outputDir, `this is the output!`);
}

console.log(`All args are: ${args}`);

console.log(`command executed from: ${process.cwd()}`);
console.log(`resolved path: ${path.resolve(process.cwd(), input)}`);

// let fast-glob deal with resolving the path, idk why but it doesn't like it when I do it, specifically on
// windows command prompt. POSIX works just fine with it.
let entries = fg.sync([input], { dot: true });
console.log(`globbed entries: ${entries}`);

entries.forEach(function (filename) {
    if (path.basename(filename).charAt(0) !== '_') {
        renderSheet(filename);
    }
});

function renderSheet(filename) {
    let destination = path.resolve(process.cwd(), outputDir, path.basename(filename, '.scss') + '.css');

    //When using Dart Sass, renderSync() is more than twice as fast as render(), due to the overhead of asynchronous callbacks. 
    let result = sass.renderSync({
        file: filename,
        sourceMap: true,
        sourceMapEmbed: true,
        outFile: destination,
        outputStyle: (minified ? 'compressed' : 'expanded')
    });

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
    })
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


