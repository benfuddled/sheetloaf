import assert from 'assert';
import * as fileFinder from '../fileFinder';

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('fileFinder.expandGlob() Test', () => {
        it('Should return array containing a single input when source is a single file', () => {
            let sources = ['test/samples/styles/file.scss'];
            let expected = ['test/samples/styles/file.scss'];
            fileFinder.expandGlob(sources, function (entries: string[]) {
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
                'test/samples/styles/file.scss',
                'test/samples/styles/thing.js'
            ];
            fileFinder.expandGlob(sources, function (entries: string[]) {
                assert.deepStrictEqual(entries.sort(), expected.sort());
            });
        });

        it('Should return array of inputs when source is a glob', () => {
            let sources = ['test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'];
            fileFinder.expandGlob(sources, function (entries: string[]) {
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
});