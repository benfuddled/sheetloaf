const assert = require('assert');
const path = require('path');
const _ = require('lodash');
const parser = require('../parser');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('parser.expandGlob() Test', () => {

        it('Should return array containing a single input when source is a single file', () => {
            let sources = ['test/samples/styles/file.scss'];
            let expected = ['test/samples/styles/file.scss'];
            parser.expandGlob(sources, function (entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return array of inputs when source is a folder', () => {
            let sources = ['test/samples/styles'];
            let expected = ['test/samples/styles/_partial.scss', 'test/samples/styles/file-with-error.scss', 'test/samples/styles/file.scss', 'test/samples/styles/thing.js'];
            parser.expandGlob(sources, function (entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return array of inputs when source is a glob', () => {
            let sources = ['test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'];
            /*let expected = ['test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'].map(x => path.resolve(process.cwd(), x) );*/
            parser.expandGlob(sources, function (entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return correct array of inputs when source is a mixed array of folders, files, and glob patterns', () => {
            let sources = ['test/samples/styles', 'test/samples/styles/file.scss', 'test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/_partial.scss', 'test/samples/styles/file-with-error.scss', 'test/samples/styles/file.scss', 'test/samples/styles/thing.js', 'test/samples/styles/file.scss', 'test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'];
            parser.expandGlob(sources, function (entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });
    });

    describe('parser.parseDest() Test', () => {

        it('Should return correct output as string when output is a single file', () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.parseDest(source, out), expected);
        });

        it('Should return correct output as string when base paramemter is passed', () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let dir = 'test/samples/render/';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.parseDest(source, dir, base), expected);
        });

        it('Should return correct output as string when base parameter is not passed', () => {
            let source = 'test/samples/styles/file.scss';
            let dir = 'test/samples/render/';
            let expected = 'test/samples/render/file.css';

            assert.strictEqual(parser.parseDest(source, dir), expected);
        });

        it('Should return correct output as string when custom extension is passed', () => {
            let source = 'test/samples/styles/file.scss';
            let dir = 'test/samples/render';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/file.lol';

            assert.strictEqual(parser.parseDest(source, dir, base, '.lol'), expected);
        });

    });

    describe('parser.getPostCSSConfig() Test', () => {
        it('Should get PostCSS config file contents.', () => {
            parser.getPostCSSConfig('test/samples', function (config) {
                assert.deepStrictEqual(config, {
                    plugins: [require('autoprefixer'), require('postcss-custom-properties')]
                });
            })
        });
    });
});