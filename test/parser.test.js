const assert = require('assert');
const path = require('path');
const _ = require('lodash');
const parser = require('../parser');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('parser.expandGlob() Test', () => {

        it('Should return array containing a single input when source is a single file', () => {
            let sources = ['test/samples/styles/multi.scss'];
            let expected = ['test/samples/styles/multi.scss'].map(x => path.resolve(process.cwd(), x) );
            parser.expandGlob(sources, function(entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return array of inputs when source is a folder', () => {
            let sources = ['test/samples/styles'];
            let expected = ['test/samples/styles/multi.scss', 'test/samples/styles/thing.js', 'test/samples/styles/thing.scss'].map(x => path.resolve(process.cwd(), x) );
            parser.expandGlob(sources, function(entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return array of inputs when source is a glob', () => {
            let sources = ['test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'].map(x => path.resolve(process.cwd(), x) );
            parser.expandGlob(sources, function(entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });

        it('Should return correct array of inputs when source is a mixed array of folders, files, and glob patterns', () => {
            let sources = ['test/samples/styles', 'test/samples/styles/multi.scss', 'test/samples/styles/sub/**/*.scss'];
            let expected = ['test/samples/styles/multi.scss', 'test/samples/styles/thing.js', 'test/samples/styles/thing.scss', 'test/samples/styles/multi.scss', 'test/samples/styles/sub/baz.scss', 'test/samples/styles/sub/ack/foo.scss'].map(x => path.resolve(process.cwd(), x) );
            parser.expandGlob(sources, function(entries) {
                assert.deepStrictEqual(entries, expected);
            });
        });
    });


    // describe('parser.parseDestination() Test', () => {
    //     it('Should return correct output as string when input is a single file', () => {
    //         let filename = 'test/samples/styles/sub/baz.scss';
    //         let source = 'test/samples/styles/sub/baz.scss';
    //         let out = 'test/dist/baz.css';
    //         let expected = path.resolve(process.cwd(), out);

    //         assert.equal(parser.parseDestination(filename, source, out), expected);
    //     });
    //     it('Should return correct output as string when input dir is used with output dir', () => {
    //         let filename = 'test/samples/styles/baz.scss';
    //         let source = 'test/samples/styles/';
    //         let out = 'test/dist/';
    //         let expected = '/home/ben/sheetloaf/test/dist/baz.css';

    //         assert.equal(parser.parseDestination(filename, source, out), expected);
    //     });
    //     it('Should return correct output as string when input dir is used with output glob', () => {
    //         let filename = 'test/samples/styles/baz.scss';
    //         let source = 'test/samples/styles/';
    //         let out = 'test/dist/**/*.css';
    //         let expected = '/home/ben/sheetloaf/test/dist/baz.css';

    //         assert.equal(parser.parseDestination(filename, source, out), expected);
    //     });
    //     it('Should return correct output as string when glob is used with output dir', () => {
    //         let filename = 'test/samples/styles/sub/baz.scss';
    //         let source = 'test/samples/styles/**/*.scss';
    //         let out = 'test/dist/';
    //         let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

    //         assert.equal(parser.parseDestination(filename, source, out), expected);
    //     });
    //     it('Should return correct output as string when glob is used with output glob', () => {
    //         let filename = 'test/samples/styles/sub/baz.scss';
    //         let source = 'test/samples/styles/**/*.scss';
    //         let out = 'test/dist/**/*.css';
    //         let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

    //         assert.equal(parser.parseDestination(filename, source, out), expected);
    //     });
    // });

    // describe('parser.parseInput() Test', () => {
    //     it('Should get file listing correctly when a directory is used as input', function (done) {
    //         let expected = [path.resolve(process.cwd(), 'test/samples/styles/thing.js'), path.resolve(process.cwd(), 'test/samples/styles/thing.scss')]
    //         parser.parseInput('test/samples/styles/', function (entries) {
    //             if (_.isEqual(expected, entries)) {
    //                 done();
    //             }
    //         });
    //     });
    //     it('Should get file listing correctly when a glob is used as input', function (done) {
    //         let expected = [path.resolve(process.cwd(), 'test/samples/styles/thing.scss'), path.resolve(process.cwd(), 'test/samples/styles/sub/baz.scss')]
    //         parser.parseInput('test/samples/styles/**/*.scss', function (entries) {
    //             if (_.isEqual(expected, entries)) {
    //                 done();
    //             } else {
    //                 done(new Error(`Entries ${entries} do not match expected ${expected}.`));
    //             }
    //         });
    //     });
    //     it('Should get file correctly when an individual file is used as input', function (done) {
    //         let expected = [path.resolve(process.cwd(), 'test/samples/styles/thing.scss')];
    //         parser.parseInput('test/samples/styles/thing.scss', function (entries) {
    //             if (_.isEqual(expected, entries)) {
    //                 done();
    //             } else {
    //                 done(new Error(`Entries ${entries} do not match expected ${expected}.`));
    //             }
    //         });
    //     });
    // });

    // describe('parser.getPostCSSConfig() Test', () => {
    //     it('Should get PostCSS config file contents.', () => {
    //         assert.deepEqual(parser.getPostCSSConfig('test/samples'), { plugins: [require('autoprefixer')] });
    //     });
    //     it('Should return an object of empty arrays if no PostCSS config file is found.', () => {
    //         assert.deepEqual(parser.getPostCSSConfig('wrong/directory/'), { plugins: [] });
    //     });
    // });
});


// parsedestination: should throw an error when input glob is used to output a single file
// check if unqouted globs work (in and out)
// check if filename arrays work
// check if stdout works if --option is not provided