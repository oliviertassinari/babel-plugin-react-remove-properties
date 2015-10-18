## Babel plugin for removing React properties

[![Build Status](https://travis-ci.org/oliviertassinari/babel-plugin-react-remove-properties.svg?branch=master)](https://travis-ci.org/oliviertassinari/babel-plugin-react-remove-properties)
[![npm version](https://img.shields.io/npm/v/babel-plugin-react-remove-properties.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-react-remove-properties.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

This is useful when using selectors like data-test to run selenium test. Those properties are useless when running the code in production. You can save bandwidth by removing them.

### Example

**In**
```js
const Foo = React.createClass({
  render() {
    return (
      <div className="bar" data-test="thisIsASelectorForSelenium">
        Hello Wold!
      </div>
    );
  }
});
```

**Out**
```js
const Foo = React.createClass({
  render() {
    return (
      <div className="bar">
        Hello Wold!
      </div>
    );
  }
});
```

### Installation

```sh
$ npm install --save-dev babel-plugin-react-remove-properties
```

### Usage

#### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "env": {
    "production": {
      "plugins": ["react-remove-properties"]
    }
  }
}
```

#### Via CLI

```sh
$ babel --plugins react-remove-properties script.js
```

#### Via Node API

```js
require("babel-core").transform("code", {
  plugins: ["react-remove-properties"]
});
```

## License

MIT
