# Babel plugin for removing React properties

[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-react-remove-properties.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-react-remove-properties)
[![npm version](https://img.shields.io/npm/v/babel-plugin-react-remove-properties.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-react-remove-properties.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

This is useful when using selectors like data-test to run selenium test. Those properties are useless when running the code in production. You can save bandwidth by removing them.

## Example

**In**
```js
class Foo extends React.Component {
  render() {
    return (
      <div className="bar" data-test="thisIsASelectorForSelenium">
        Hello Wold!
      </div>
    );
  }
}
```

**Out**
```js
class Foo extends React.Component {
  render() {
    return (
      <div className="bar">
        Hello Wold!
      </div>
    );
  }
}
```

## Installation

```sh
npm install --save-dev babel-plugin-react-remove-properties
```

## Usage

#### Via `.babelrc` (Recommended)

**.babelrc**

without options
```js
{
  "env": {
    "production": {
      "plugins": ["react-remove-properties"]
    }
  }
}
```

with options
```js
{
  "env": {
    "production": {
      "plugins": ["react-remove-properties", {"property": "data-test"}]
    }
  }
}
```

the options can also accepts an array of property names

```js
{
  "env": {
    "production": {
      "plugins": ["react-remove-properties", {"properties": ["data-test", "data-foo"]}]
    }
  }
}
```

#### Via CLI

```sh
babel --plugins react-remove-properties script.js
```

#### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["react-remove-properties"]
});
```

# License

MIT
