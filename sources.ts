import path from "path";
import { CompileResult } from "sass";

export class SassSources {
    absoluteMain: string;
    main: string;
    sources: string[] = [];
    constructor(filename: string, sassResult: CompileResult) {
        this.main = filename;
        this.absoluteMain = path.resolve(filename);

        sassResult.loadedUrls.forEach(url => {
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