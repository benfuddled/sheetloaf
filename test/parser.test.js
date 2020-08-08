const assert = require('assert');
const path = require('path');
const parser = require('../parser');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('parser.parseDestination() Test', () => {
        it('Should return correct output as string when single file is used', () => {
            let filename = 'test/styles/sub/baz.scss';
            let source = 'test/styles/sub/baz.scss';
            let out = 'test/dist/baz.css';
            let expected = path.resolve(process.cwd(), out);

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when input dir is used with output dir', () => {
            let filename = 'test/styles/baz.scss';
            let source = 'test/styles/';
            let out = 'test/dist/';
            let expected = '/home/ben/sheetloaf/test/dist/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when input dir is used with output glob', () => {
            let filename = 'test/styles/baz.scss';
            let source = 'test/styles/';
            let out = 'test/dist/**/*.css';
            let expected = '/home/ben/sheetloaf/test/dist/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when glob is used with output dir', () => {
            let filename = 'test/styles/sub/baz.scss';
            let source = 'test/styles/**/*.scss';
            let out = 'test/dist/';
            let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
        it('Should return correct output as string when glob is used with output glob', () => {
            let filename = 'test/styles/sub/baz.scss';
            let source = 'test/styles/**/*.scss';
            let out = 'test/dist/**/*.css';
            let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
    });
});