import path from "path";
import { CompileResult } from "sass";

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
            if (url.pathname !== this.absoluteMain) {
                this.sources.push(url.pathname);
            }
        })
    }

    containsPartial(filename: string) {
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