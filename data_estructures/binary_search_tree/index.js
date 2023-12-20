const Tree = require('./Tree');

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// Initialize tree
const array = [1, 2, 3, 4, 5, 8];
const tree = new Tree(array);

// Call methods
tree.insert(7);
// tree.insert(9);
// tree.insert(0);
// tree.insert(15);
// tree.insert(13);

// Check the tree
prettyPrint(tree.root);
