function getOutputDir(args) {
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

exports.getOutputDir = getOutputDir;