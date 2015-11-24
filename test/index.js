'use strict';

import path from 'path';
import fs from 'fs';
import assert from 'assert';
import {parse, transform, traverse} from 'babel-core';
import reactPlugin from '../src/index';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('remove react propTypes', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const source = fs.readFileSync(path.join(fixtureDir, 'actual.js'), 'utf8');
      const actual = transform(source, {
        plugins: [
          reactPlugin
        ],
        presets: [
          "es2015",
          "react"
        ]
      }).code;
      const expected = fs.readFileSync(path.join(fixtureDir, 'expected.js')).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});
