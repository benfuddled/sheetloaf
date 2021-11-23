const assert = require('assert');
const path = require('path');
const _ = require('lodash');
const parser = require('./../src/parser');

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
            let expected = ['test/samples/styles/_mixins.scss', 'test/samples/styles/_partial.scss', 'test/samples/styles/file-with-error.scss', 'test/samples/styles/file.scss', 'test/samples/styles/thing.js'];
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
            let expected = ['test/samples/styles/_mixins.scss', 'test/samples/styles/_partial.scss', 'test/samples/styles/file-with-error.scss', 'test/samples/styles/file.scss', 'test/samples/styles/thing.js', 'test/samples/styles/file.scss', 'test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'];
            parser.expandGlob(sources, function (entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });
    });

    describe('parser.createDestination() Test', () => {

        it(`Should return empty string when outFile, dir, base, and extension are omitted and stdin isn't used.`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, undefined, undefined, undefined, undefined, false), '');
        });

        it(`Should return empty string when outFile, dir, base, and extension are omitted and stdin is used.`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, undefined, undefined, undefined, undefined, true), '');
        });

        it(`Should ignore base and extension when outFile is specified and dir is omitted and stdin isn't used.`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, out, undefined, '/foo/bar/', '.tss', true), expected);
        });

        it(`Should ignore outFile when dir is specified and stdin isn't used.`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let dir = 'test/samples/render/sub/';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, out, dir, undefined, undefined, true), expected);
        });

        it('Should return correct output as string when base paramemter is passed', () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let dir = 'test/samples/render/';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, undefined, dir, base, undefined, false), expected);
        });

        it('Should return correct output as string when custom extension is passed and stdin is not used', () => {
            let source = 'test/samples/styles/file.scss';
            let dir = 'test/samples/render';
            let base = 'test/samples/styles';
            let expected = 'test/samples/render/file.lol';

            assert.strictEqual(parser.createDestination(source, undefined, dir, base, '.lol', false), expected);
        });

        it(`Should ignore all parameters except for source and outFile when stdin is used.`, () => {
            let source = 'test/samples/styles/sub/multi.scss';
            let out = 'test/samples/render/sub/multi.css';
            let dir = 'test/samples/render/sub/';
            let expected = 'test/samples/render/sub/multi.css';

            assert.strictEqual(parser.createDestination(source, out, dir, '/foo/bar/', '.tss', true), expected);
        });
    });

    describe('parser.generatePostcssConfig() Test', () => {
        it('Should get PostCSS config file contents.', () => {
            assert.deepStrictEqual(parser.generatePostcssConfig('test/samples'), {
                plugins: [require('autoprefixer'), require('postcss-custom-properties')]
            });
        });
        it('Should build PostCSS config file from --use parameter.', () => {
            assert.deepStrictEqual(parser.generatePostcssConfig(undefined, 'autoprefixer,postcss-custom-properties'), {
                plugins: [require('autoprefixer'), require('postcss-custom-properties')]
            });
        });
    });
});