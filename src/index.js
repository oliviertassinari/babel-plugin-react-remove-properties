'use strict';

export default function() {
  return {
    visitor: {
      JSXIdentifier(node) {
        if (node.name === 'data-test') {
          this.parentPath.dangerouslyRemove();
        }
      }
    }
  };
};
