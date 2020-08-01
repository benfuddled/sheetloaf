const assert = require('assert');
const parser = require('../cli-parser');

describe('CLI Arguments Test', () => {
    describe('parser.getOutput() Test', () => {
        it('Should return output (either dir or filename) as string', () => {
            let args = ['test/*.scss', '-o', 'test/dist/'];
            let out = parser.getOutput(args);
            assert.equal(out, args[2]);
        });
        it('Should throw an error if there is no argument after -o or --output', () => {
            let args = ['test/*.scss', '-o'];
            try {
                parser.getOutput(args);
            } catch (error) {
                assert.equal(error, '--output or -o requires a filename or directory');
            }
        });
        it('Should throw an error if -o or --output flag is not included', () => {
            let args = ['test/*.scss', 'test/dist/'];
            try {
                parser.getOutput(args);
            } catch (error) {
                assert.equal(error, '--output or -o argument required');
            }
        });
    });

    describe('parser.checkForOption() Test', () => {
        it('Should return true if flag is found', () => {
            let args = ['test/*.scss', '-ovr', '-t', '--watch'];
            assert.equal(true, parser.checkForOption(args, ['--watch', '-w']));
        });
        it('Should return false if flag is not found', () => {
            let args = ['test/*.scss', '-ovr', '-t'];
            assert.equal(false, parser.checkForOption(args, ['--watch', '-w']));
        });
    });

    describe('parser.expandArgs() Test', () => {
        it('Should return expanded arguments array', () => {
            let args = ['test/*.scss', '-ovr', '-t', '--longer'];
            let out = parser.expandArgs(args);
            assert.deepEqual(out, ['test/*.scss', '-o', '-v', '-r', '-t', '--longer']);
        });
    });
});