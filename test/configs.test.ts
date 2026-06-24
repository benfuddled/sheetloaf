import assert from 'node:assert';
import {describe, it} from 'node:test';
import * as configs from '../src/configs.ts';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

describe('When CLI Arguments Need Further Parsing - configs', () => {
    describe('configs.generatePostcssConfig() Test', () => {
        it('Should get PostCSS config file contents', () => {
            assert.deepStrictEqual(configs.generatePostcssConfigFromFile('test/samples'), {
                plugins: [require('autoprefixer'), require('postcss-custom-properties')]
            });
        });
    });
    describe('configs.generatePostcssConfigFromUse() Test', () => {
        it('Should build PostCSS config file from --use parameter', () => {
            assert.deepStrictEqual(configs.generatePostcssConfigFromUse('autoprefixer,postcss-custom-properties'), {
                plugins: [require('autoprefixer'), require('postcss-custom-properties')]
            });
        });
    });
});