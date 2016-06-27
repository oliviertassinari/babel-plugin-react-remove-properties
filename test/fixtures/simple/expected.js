"use strict";

React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      { className: "bar", __self: this
      },
      "Hello Wold!"
    );
  }
});
