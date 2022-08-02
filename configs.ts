import path from "path";
import fs from "fs";
import { AcceptedPlugin } from "postcss";
import { Options } from "sass";
import { OptionValues } from "commander";

/**
 * Generates an object used for postcss configuration.
 */
export type postcssConfigFile = {
    plugins: AcceptedPlugin[]
}
export function generatePostcssConfig(configArg: string = '', use: string) {
    let obj: postcssConfigFile = {
        plugins: []
    };
    // If user specifies --use, we ignore postcss config files.
    if (use) {
        use.split(',').forEach(function (plugin) {
            obj.plugins.push(require(plugin));
        });
    } else {
        let configFileLoc: string = path.resolve(process.cwd(), configArg, 'postcss.config.js');

        try {
            fs.lstatSync(configFileLoc);
            obj = require(configFileLoc);
        } catch (e) {
            // TODO
        }
    }
    return obj;
}

export function generateSassOptions(opts: OptionValues): Options<"sync"> {
    return {
        style: opts.style,
        loadPaths: opts.loadPath ? opts.loadPath.split(',') : [],
        sourceMap: opts.sourceMap === false ? false : true,
        sourceMapIncludeSources: opts.sourceMap === false ? false : true
    };
}

export function generateSassOptionsAsync(opts: OptionValues): Options<"async"> {
    return {
        style: opts.style,
        loadPaths: opts.loadPath ? opts.loadPath.split(',') : [],
        sourceMap: opts.sourceMap === false ? false : true,
        sourceMapIncludeSources: opts.sourceMap === false ? false : true
    };
}