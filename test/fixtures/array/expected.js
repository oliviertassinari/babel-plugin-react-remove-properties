"use strict";

React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      { "data-test": true, __self: this
      },
      "Hello Wold!"
    );
  }
});
