const assert = require('assert');
const argParser = require('../cli-arg-parser');

describe('CLI Arguments Test', () => {
    describe('argParser.getOutputDir() Test', () => {
        it('Should return output directory', () => {
            let args = ['test/*.scss', '-o', 'test/dist/'];
            let out = argParser.getOutputDir(args);
            assert.equal(out, args[2]);
        });
        it('Should throw an error if there is no argument after -o or --output', () => {
            let args = ['test/*.scss', '-o'];
            try {
                argParser.getOutputDir(args);
            } catch (error) {
                assert.equal(error, '--output or -o requires a filename or directory');
            }
        });
        it('Should throw an error if -o or --output argument is not included', () => {
            let args = ['test/*.scss', 'test/dist/'];
            try {
                argParser.getOutputDir(args);
            } catch (error) {
                assert.equal(error, '--output or -o argument required');
            }
        });
    });
});