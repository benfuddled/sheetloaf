import path from "path";
import { CompileResult } from "sass";

export class SassSources {
    main: string;
    sources: string[] = [];
    constructor(filename: string, sassResult: CompileResult) {
        this.main = path.resolve(filename);

        sassResult.loadedUrls.forEach(url => {
            this.sources.push(url.pathname);
        })

        console.log('******************');
        console.log(this.main);
        console.log(this.sources);
        console.log('******************');
    }

    usedBy(fileName: string) {
        if (fileName === this.main) {
            return true;
        } else {
            return false;
        }
    }

    getSources() {
        return this.sources;
    }

    getMain() {
        return this.main;
    }
}