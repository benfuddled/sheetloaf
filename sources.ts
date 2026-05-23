import path from "path";
import { CompileResult } from "sass-embedded";
import { fileURLToPath } from "url";

let sourcesChecker: SassSources[] = [];

export class SassSources {
    absoluteMain: string;
    main: string;
    sources: string[] = [];
    constructor(fileName: string, sassResult: CompileResult) {
        this.main = fileName;
        this.absoluteMain = path.resolve(fileName);
        this.setSources(sassResult.loadedUrls);
    }

    setSources(urls: URL[]) {
        this.sources.splice(0, this.sources.length);
        urls.forEach(url => {
            if (fileURLToPath(url.href) !== this.absoluteMain) {
                this.sources.push(fileURLToPath(url.href));
            }
        })
    }

    containsPartial(filename: string) {
        // FIXME: source paths are a little weird on windows which is making this check
        // always return false.
        if (this.sources.indexOf(path.resolve(filename)) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    getSources() {
        return this.sources;
    }

    getAbsoluteMain() {
        return this.absoluteMain;
    }

    getMain() {
        return this.main;
    }
}

export function getChecker(): SassSources[] {
    return sourcesChecker;
}

export function clearSourcesChecker() {
    sourcesChecker.splice(0, sourcesChecker.length);
}

export function addResultToSourcesChecker(fileName: string, result: CompileResult) {
    let resultExistsInChecker: boolean = false;

    let ind = 0;
    while (ind < sourcesChecker.length && resultExistsInChecker === false) {

        if (sourcesChecker[ind].getAbsoluteMain() === path.resolve(fileName)) {
            sourcesChecker[ind].setSources(result.loadedUrls);
            resultExistsInChecker = true;
        }
        ind = ind + 1;
    }

    if (resultExistsInChecker === false) {
        sourcesChecker.push(new SassSources(fileName, result));
    }
}