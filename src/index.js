'use strict';

module.exports = function() {
  return {
    visitor: {
      JSXIdentifier: function(path) {
        if (path.node.name === 'data-test') {
          path.parentPath.remove();
        }
      },
    },
  };
};
