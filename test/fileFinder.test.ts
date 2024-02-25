import assert from 'assert';
import * as fileFinder from '../fileFinder';

describe('When CLI Arguments Need Further Parsing - fileFinder', () => {
    describe('fileFinder.getAllFilesPathsFromSources() Test', () => {
        it('Should return array containing a single input when source is a single file', () => {
            let sources = ['test/samples/styles/file.scss'];
            let expected = ['test/samples/styles/file.scss'];
            fileFinder.getAllFilesPathsFromSources(sources, function (entries: string[]) {
                assert.deepStrictEqual(entries.sort(), expected.sort());
            });
        });

        it('Should return array of inputs when source is a folder', () => {
            let sources = ['test/samples/styles'];
            let expected = [
                'test/samples/styles/_mixins.scss',
                'test/samples/styles/_partial.scss',
                'test/samples/styles/file-with-error.scss',
                'test/samples/styles/file-with-missing-use.scss',
                'test/samples/styles/file-with-package-import.scss',
                'test/samples/styles/file.scss',
                'test/samples/styles/thing.js'
            ];
            fileFinder.getAllFilesPathsFromSources(sources, function (entries: string[]) {
                assert.deepStrictEqual(entries.sort(), expected.sort());
            });
        });

        it('Should return array of inputs when source is a glob', () => {
            let sources = ['test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'];
            fileFinder.getAllFilesPathsFromSources(sources, function (entries: string[]) {
                assert.deepStrictEqual(entries.sort(), expected.sort());
            });
        });

        it('Should return correct array of inputs when source is a mixed array of folders, files, and glob patterns', () => {
            let sources = ['test/samples/styles', 'test/samples/styles/file.scss', 'test/samples/styles/sub/**/*.scss', 'test/samples/styles/sub/*.scss'];
            let expected = [
                'test/samples/styles/_mixins.scss',
                'test/samples/styles/_partial.scss',
                'test/samples/styles/file-with-error.scss',
                'test/samples/styles/file-with-missing-use.scss',
                'test/samples/styles/file-with-package-import.scss',
                'test/samples/styles/file.scss',
                'test/samples/styles/thing.js',
                'test/samples/styles/sub/baz.scss',
                'test/samples/styles/sub/ack/foo.scss'
            ].sort();


            fileFinder.getAllFilesPathsFromSources(sources, function (entries: string[]) {
                assert.deepStrictEqual(entries.sort(), expected.sort());
            });
        });
    })
    describe('fileFinder.buildDestinationPath() Test', () => {
        it(`Should return empty string when outFile, dir, base, and extension are omitted and stdin isn't used`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, undefined, undefined, undefined, undefined, false), '');
        });

        it(`Should return empty string when outFile, dir, base, and extension are omitted and stdin is used`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, undefined, undefined, undefined, undefined, true), '');
        });

        it(`Should ignore base and extension when outFile is specified and dir is omitted and stdin is not used`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, out, undefined, '/foo/bar/', '.tss', true), expected);
        });

        it(`Should ignore outFile when dir is specified and stdin is not used`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let dir = 'test/samples/render/sub/';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, out, dir, undefined, undefined, true), expected);
        });

        it('Should return correct output as string when base paramemter is passed', () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let dir = 'test/samples/render/';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, undefined, dir, base, undefined, false), expected);
        });

        it('Should return correct output as string when custom extension is passed and stdin is not used', () => {
            let source = 'test/samples/styles/file.scss';
            let dir = 'test/samples/render';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/file.lol';

            assert.strictEqual(fileFinder.buildDestinationPath(source, undefined, dir, base, '.lol', false), expected);
        });

        it(`Should ignore all parameters except for source and outFile when stdin is used`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let dir = 'test/samples/render/sub/';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(fileFinder.buildDestinationPath(source, out, dir, '/foo/bar/', '.tss', true), expected);
        });
    });
});