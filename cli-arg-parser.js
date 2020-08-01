/* LOOK INTO COMMANDER FOR CLI OPTIONS */

function getOutputDir(args) {
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

function checkDupes(args) {
    //TODO
}

exports.getOutputDir = getOutputDir;
exports.expandArgs = expandArgs;