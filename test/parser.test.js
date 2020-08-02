const assert = require('assert');
const parser = require('../parser');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('parser.parseDestination() Test', () => {
        it('Should return correct output as string when globstar is used', () => {
            let filename = 'test/styles/sub/baz.scss';
            let source = 'test/styles/**/*.scss';
            let out = 'test/dist/';
            let expected = '/home/ben/sheetloaf/test/dist/sub/baz.css';

            assert.equal(parser.parseDestination(filename, source, out), expected);
        });
    });
});