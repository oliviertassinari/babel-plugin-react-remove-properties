'use strict';

module.exports = function({Plugin}) {
  return new Plugin('react-remove-properties', {
    visitor: {
      JSXIdentifier(node) {
        if (node.name === 'data-test') {
          this.parentPath.dangerouslyRemove();
        }
      },
    },
  });
};
