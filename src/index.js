export default function() {
  return {
    visitor: {
      Program(path, state) {
        // On program start, do an explicit traversal up front for this plugin.

        const property = state.opts.property || 'data-test';
        path.traverse({
          JSXIdentifier(path) {
            if (path.node.name === property) {
              path.parentPath.remove();
            }
          },
        });
      }
    },
  };
};
