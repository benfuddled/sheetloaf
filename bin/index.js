#!/usr/bin/env node

// Skip the first two, I don't care.
const args = process.argv.slice(2);

console.log( "Hello!" );
console.log(`Input given was ${args[0]}`);
console.log(`All args are: ${args}`);