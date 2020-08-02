#!/usr/bin/env node
const sass = require('sass');
const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const picomatch = require('picomatch');
const version = require('./package.json').version;
const { Command } = require('commander');
const program = new Command();


let input, output;

program.version(version);
// Angled brackets denote required argument, square denote optional
program
    .arguments('<source> <out>')
    .description('set input and output')
    .action((source, out) => {
        input = source;
        output = out;
    });
program
    .option('-s, --style <type>', 'Output style', 'expanded')
    .option('-w, --watch <type>', 'Watch files for changes and recompile as needed');
program.parse(process.argv);

console.log(`Style: ${program.style}`);
console.log(`Watch: ${program.watch}`);

let entries = fg.sync([input], { dot: true });
console.log(`Globbed entries: ${entries}`);

entries.forEach(function (filename) {
    if (path.basename(filename).charAt(0) !== '_') {
        renderSheet(filename);
    }
});

function renderSheet(filename) {
    let destination = parseDestination(filename, input, output);

    //When using Dart Sass, renderSync() is more than twice as fast as render(), due to the overhead of asynchronous callbacks.
    let result = sass.renderSync({
        file: filename,
        sourceMap: true,
        sourceMapEmbed: true,
        outFile: destination,
        outputStyle: program.style
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

function validateSourceDest(source) {
    let isGlob = picomatch.scan(source).isGlob;
}

function parseDestination(filename, source, dest) {
    if (picomatch.scan(source).isGlob) {
        let dirStructure = path.relative(picomatch.scan(source).base, path.dirname(filename));
        let outName = path.basename(filename, path.extname(filename)) + '.css';
        return path.resolve(process.cwd(), dest, dirStructure, outName);
    } else if (false) {
        //todo
        //is dir
    } else {
        // Is file
        return path.resolve(process.cwd(), output);
    }
    /*let dirStructure = path.relative(picomatch.scan(source).base, filename);
    console.log(picomatch.scan(filename));
    console.log(picomatch.scan(source));
    console.log(picomatch.scan(source));
    console.log(`dirStructure: ${path.relative(picomatch.scan(source).base, filename)}`)*/
    /*console.log(path.isAbsolute('/argh/'));
    console.log(picomatch.scan(filename));
    console.log(picomatch.scan(source));
    console.log(`input base: ${picomatch.scan(source).base}`);
    console.log(`resolve: ${path.resolve(process.cwd(), 'test/thing/', '/argh/')}`)
    console.log(picomatch.scan(dest));*/
    // Change/add check to see if input is dir or glob, there's 
    // a bug where if destination is a file but the output is
    // a dir it crashes

    // Also add option to mirror input dir structure if input is glob
    let sourceIsGlob = picomatch.scan(source).isGlob;
    let destISGlob = picomatch.scan(dest).isGlob;

    console.log('-------------------');

    if (sourceIsGlob === true) {
        return path.resolve(process.cwd(), output, path.basename(filename, '.scss') + '.css');
    } else {
        return path.resolve(process.cwd(), output);
    }
}


/*
// Skip the first two, I don't care.
const args = process.argv.slice(2);
console.log(args);

let input = args[0];
let output = parser.getOutput(args);
let watchFiles = parser.checkForOption(args, ['--watch', '-w']);
let minifyOutput = parser.checkForOption(args, ['--style=compressed']);


let inputIsGlob = picomatch.scan(input).isGlob;

// let fast-glob deal with resolving the path, idk why but it doesn't like it
// when I do it beforehand, specifically on windows command prompt.
// POSIX works just fine with it.
let entries = fg.sync([input], { dot: true });
console.log(`Globbed entries: ${entries}`);

entries.forEach(function (filename) {
    if (path.basename(filename).charAt(0) !== '_') {
        renderSheet(filename);
    }
});

function renderSheet(filename) {
    let destination;
    if (inputIsGlob === true) {
        destination = path.resolve(process.cwd(), output, path.basename(filename, '.scss') + '.css');
    } else {
        destination = path.resolve(process.cwd(), output);
    }

    //When using Dart Sass, renderSync() is more than twice as fast as render(), due to the overhead of asynchronous callbacks.
    let result = sass.renderSync({
        file: filename,
        sourceMap: true,
        sourceMapEmbed: true,
        outFile: destination,
        outputStyle: (minifyOutput ? 'compressed' : 'expanded')
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

//console.log(`command executed from: ${process.cwd()}`);
//console.log(`resolved path: ${path.resolve(process.cwd(), input)}`);


// sass.render({
//     file: args[0],
//     sourceMap: true,
//     sourceMapEmbed: true,
//     outFile: destination
// }, function (err, result) {
//     console.log(result);
// });*/

/*if (args.includes('--watch') || args.includes('-w')) {
    console.log(`I'd watch your file if that feature was included.`)
}

if (args.includes('--dir') || args.includes('-d')) {
    let dir = args[(args.indexOf('--dir') !== -1 ? args.indexOf('--dir') + 1 : args.indexOf('-d') + 1)];
    console.log(`I'd output your file to ${dir} that feature was included.`)
}*/

module.exports.parseDestination = parseDestination;