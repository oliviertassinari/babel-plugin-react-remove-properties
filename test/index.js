import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {transformFileSync} from 'babel-core';
import reactPlugin from '../src/index';

const defaultPluginOptions = {};

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

function getPluginOptionsForDirectory(directory, filename = 'options.json') {
  try {
    return require(directory + '/' + filename);
  } catch (e) {
    return defaultPluginOptions;
  }
}

describe('remove react propTypes', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const pluginOptions = getPluginOptionsForDirectory(fixtureDir);
      const actual = transformFileSync(path.join(fixtureDir, 'actual.js'), {
        plugins: [
          [reactPlugin, pluginOptions],
        ],
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});
