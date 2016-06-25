export default function() {
  return {
    visitor: {
      Program(path, state) {
        // On program start, do an explicit traversal up front for this plugin.
        const properties = state.opts.properties || [];

        if (state.opts.property) {
          properties.push(state.opts.property);
        }

        if (properties.length === 0) {
          properties.push('data-test');
        }

        path.traverse({
          JSXIdentifier(path) {
            if (properties.indexOf(path.node.name) > -1) {
              path.parentPath.remove();
            }
          },
        });
      }
    },
  };
};
