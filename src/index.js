'use strict';

module.exports = function() {
  return {
    visitor: {
      Program: function(path, state) {
        // On program start, do an explicit traversal up front for this plugin.
        const property = state.opts.property || 'data-test';
        path.traverse({
          JSXIdentifier: function(path) {
            if (path.node.name === property) {
              path.parentPath.remove();
            }
          },
        });
      }
    },
  };
};
