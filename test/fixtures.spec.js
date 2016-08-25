// @flow weak

import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {transformFileSync} from 'babel-core';
import reactPlugin from '../src/index';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

const defaultPluginOptions = {};

function getPluginOptionsForDirectory(directory, filename = 'options.json') {
  try {
    return require(`${directory}/${filename}`);
  } catch (e) {
    return defaultPluginOptions;
  }
}

describe('fixtures', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should work with ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const pluginOptions = getPluginOptionsForDirectory(fixtureDir);

      // Only run plugins targeting the production env.
      process.env.BABEL_ENV = 'production';
      const actual = transformFileSync(path.join(fixtureDir, 'actual.js'), {
        babelrc: false,
        plugins: [
          [reactPlugin, pluginOptions],
          'babel-plugin-syntax-jsx',
        ],
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

      assert.strictEqual(trim(actual), trim(expected));
    });
  });
});
