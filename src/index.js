'use strict';

module.exports = function({Plugin}) {
  const visitor = {
    Property: {
      exit(node) {
        if (node.computed || node.key.name !== 'propTypes') {
          return;
        }

        const parent = this.findParent((parentCurrent) => {
          if (parentCurrent.type !== 'CallExpression') {
            return false;
          }

          return parentCurrent.get('callee').matchesPattern('React.createClass');
        });

        if (parent) {
          this.dangerouslyRemove();
        }
      },
    },
  };

  return new Plugin('react-remove-prop-types', {
    visitor,
    metadata: {
      group: 'builtin-pre',
    },
  });
};
