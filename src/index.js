'use strict';

module.exports = function() {
  return {
    visitor: {
      Program(path) {
        // On program start, do an explicit traversal up front for your plugin.
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
