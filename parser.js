const path = require('path');
const picomatch = require('picomatch');

function parseDestination(filename, source, dest) {
    if (picomatch.scan(source).isGlob) {
        let dirStructure = path.relative(picomatch.scan(source).base, path.dirname(filename));
        let outName = path.basename(filename, path.extname(filename)) + '.css';
        return path.resolve(process.cwd(), dest, dirStructure, outName);
    } else if (fs.lstatSync(path.resolve(process.cwd(), source)).isDirectory()) {
        //todo
        //is dir
        let dirStructure = path.relative(path.resolve(process.cwd(), source), path.dirname(filename));
        let outName = path.basename(filename, path.extname(filename)) + '.css';
        return path.resolve(process.cwd(), dest, dirStructure, outName);
    } else {
        // Is file
        return path.resolve(process.cwd(), output);
    }
}

exports.parseDestination = parseDestination;











/* LOOK INTO COMMANDER FOR CLI OPTIONS */



/*function getOutput(args) {
    args = expandArgs(args);
    let out;
    if (args.includes('--output') || args.includes('-o')) {
        let index = (args.indexOf('--output') !== -1 ? args.indexOf('--output') + 1 : args.indexOf('-o') + 1);
        out = args[index];

        if (out === undefined || out === null) {
            throw "--output or -o requires a filename or directory"
        }
    } else {
        throw "--output or -o argument required"
    }
    return out;
}

function checkForOption(args, flags) {
    args = expandArgs(args);

    return flags.some((flag) => { return args.includes(flag) });
}

function getOptionArgument(args, flag) {

    //maybe just use commander
    args = expandArgs(args);
    // string.includes(substring)

    for (let i = 0; i < args.length; i++) {
        //if ()
    }

    if (args.includes('--output') || args.includes('-o')) {
        let index = (args.indexOf('--output') !== -1 ? args.indexOf('--output') + 1 : args.indexOf('-o') + 1);
        out = args[index];

        if (out === undefined || out === null) {
            throw "--output or -o requires a filename or directory"
        }
    } else {
        throw "--output or -o argument required"
    }

    // if option contains =, split based on that rather than the param that follows
}

// https://nullprogram.com/blog/2020/08/01/
// TODO params where there's no space between the option and the argument.
// I'm doing this all wrong btw, but at least I'm having fun.
function expandArgs(args) {

    let expanded = [];

    args.forEach((param) => {

        if (param[0] === '-' && param[1] !== '-' && param.length > 2) {
            // If the above conditions are true the param is most likely a group
            // of flags that we will need to separate.
            for (var i = 1; i < param.length; i++) {
                expanded.push('-' + param.charAt(i));
            }
        } else {
            expanded.push(param);
        }
    });

    return expanded;
}

function getOptionArgument(args, flag) {
    // TODO

    // if option contains =, split based on that rather than the param that follows
}

function checkDupes(args) {
    //TODO
}

exports.getOutput = getOutput;
exports.expandArgs = expandArgs;
exports.checkForOption = checkForOption;*/