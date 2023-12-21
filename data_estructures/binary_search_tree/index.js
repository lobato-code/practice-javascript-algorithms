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
const array = [3, 10, 24, 32, 34, 50, 800];
const tree = new Tree(array);

// Call methods
tree.insert(7);
tree.insert(6);
console.log('tree.walk()', tree.walk());
console.log('tree.find()', tree.find(10));
console.log('tree.minimun()', tree.minimun().data);
console.log('tree.maximun()', tree.maximun().data);
console.log('tree.succesor(tree)', tree.succesor(tree.root));

// tree.insert(9);
// tree.insert(0);
// tree.insert(15);
// tree.insert(13);

// Check the tree
prettyPrint(tree.root);
