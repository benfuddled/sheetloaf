#!/usr/bin/env node
const sass = require('sass');

// Skip the first two, I don't care.
const args = process.argv.slice(2);

console.log( "Hello!" );
console.log(`Input given was ${args[0]}`);
console.log(`All args are: ${args}`);

var destination = 'test/output/thing.css';
sass.render({
    file: args[0],
    sourceMap: true,
    sourceMapEmbed: true,
    outFile: destination
}, function (err, result) {
    console.log(result);
});

if (args.includes('--watch') || args.includes('-w')) {
    console.log(`I'd watch your file if that feature was included.`)
}