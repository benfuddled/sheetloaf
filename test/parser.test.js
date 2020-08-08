const assert = require('assert');
const path = require('path');
const _ = require('lodash');
const parser = require('../parser');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('parser.parseDestination() Test', () => {
        it('Should return correct output as string when single file is used', () => {
            let filename = 'test/samples/sub/baz.scss';
            let source = 'test/samples/sub/baz.scss';
            let out = 'test/dist/baz.css';
            let expected = path.resolve(process.cwd(), out);

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when input dir is used with output dir', () => {
            let filename = 'test/samples/baz.scss';
            let source = 'test/samples/';
            let out = 'test/dist/';
            let expected = '/home/ben/sheetloaf/test/dist/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when input dir is used with output glob', () => {
            let filename = 'test/samples/baz.scss';
            let source = 'test/samples/';
            let out = 'test/dist/**/*.css';
            let expected = '/home/ben/sheetloaf/test/dist/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when glob is used with output dir', () => {
            let filename = 'test/samples/sub/baz.scss';
            let source = 'test/samples/**/*.scss';
            let out = 'test/dist/';
            let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when glob is used with output glob', () => {
            let filename = 'test/samples/sub/baz.scss';
            let source = 'test/samples/**/*.scss';
            let out = 'test/dist/**/*.css';
            let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
    });

    describe('parser.parseInput() Test', () => {
        it('Should get file listing correctly when a directory is used as input', function (done) {
            let expected = [path.resolve(process.cwd(), 'test/samples/thing.js'), path.resolve(process.cwd(), 'test/samples/thing.scss')]
            parser.parseInput('test/samples/', function (entries) {
                if (_.isEqual(expected, entries)) {
                    done();
                }
            });
        });
        it('Should get file listing correctly when a glob is used as input', function (done) {
            let expected = [path.resolve(process.cwd(), 'test/samples/thing.scss'), path.resolve(process.cwd(), 'test/samples/sub/baz.scss')]
            parser.parseInput('test/samples/**/*.scss', function (entries) {
                if (_.isEqual(expected, entries)) {
                    done();
                } else {
                    done(new Error(`Entries ${entries} do not match expected ${expected}.`));
                }
            });
        });
        it('Should get file correctly when an individual file is used as input', function (done) {
            let expected = [path.resolve(process.cwd(), 'test/samples/thing.scss')];
            parser.parseInput('test/samples/thing.scss', function (entries) {
                if (_.isEqual(expected, entries)) {
                    done();
                } else {
                    done(new Error(`Entries ${entries} do not match expected ${expected}.`));
                }
            });
        });
    });
});