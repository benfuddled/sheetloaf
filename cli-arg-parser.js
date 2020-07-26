function getOutputDir(args) {
    let out;
    if (args.includes('--output') || args.includes('-o')) {
        out = args[(args.indexOf('--output') !== -1 ? args.indexOf('--output') + 1 : args.indexOf('-o') + 1)];
    } else {
        throw "--output or -o argument required"
    }
    return out;
}

exports.getOutputDir = getOutputDir;