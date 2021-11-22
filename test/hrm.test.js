const hrm = require('../dist/hrm');
const assert = require('assert');

describe('When CLI Arguments Need Further Parsing Test', () => {
    describe('hrm.howdy() Test', () => {

        it('should do something', () => {
            assert.deepStrictEqual(hrm.howdy(), 'hello');
        });
    });
});