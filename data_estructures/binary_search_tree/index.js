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
// PROBLEM: successor() works fine with a node with right subtree but we got an error when it doesn't
// const node10 = tree.find(10);
const node6 = tree.find(6);
// console.log('tree.succesor(7)', tree.succesor(node10)); // 24
console.log('tree.succesor(6)', tree.succesor(node6)); // 7

// tree.insert(9);
// tree.insert(0);
// tree.insert(15);
// tree.insert(13);
// Unexisting node: Returns the entire root
console.log('tree.delete()', tree.delete(75));
tree.delete(6);
tree.delete(800);
tree.delete(50);

// Check the tree
prettyPrint(tree.root);
