'use strict';

module.exports = function() {
  return {
    visitor: {
      Program: function(path) {
        // On program start, do an explicit traversal up front for this plugin.
        path.traverse({
          JSXIdentifier: function(path) {
            if (path.node.name === 'data-test') {
              path.parentPath.remove();
            }
          },
        });
      }
    },
  };
};
