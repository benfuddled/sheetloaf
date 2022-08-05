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
export function generatePostcssConfigFromFile(configPath: string = '') {
    let obj: postcssConfigFile = {
        plugins: []
    };
    let configFileLoc: string = path.resolve(process.cwd(), configPath, 'postcss.config.js');

    try {
        fs.lstatSync(configFileLoc);
        obj = require(configFileLoc);
    } catch (e) {
        console.log(`No postcss.config.js file found at location ${configPath}`);
        // TODO
    }
    return obj;
}
export function generatePostcssConfigFromUse(useArg: string) {
    let obj: postcssConfigFile = {
        plugins: []
    };
    useArg.split(',').forEach(function (plugin) {
        obj.plugins.push(require(plugin));
    });
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