/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
const Node = require('./Node');

class Tree {
  constructor(arr) {
    const sorted = this.sortAndRemoveDuplicates(arr);
    this.root = this.buildTree(sorted);
  }

  sortAndRemoveDuplicates(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    return sorted;
  }

  // Recursive Case: Reassignment (move the pointer)
  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    const mid = parseInt((start + end) / 2, 10);
    const root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }

  // Recursive Case: Accumulation - array
  walk(root = this.root, ans = []) {
    if (root == null) return root;
    this.walk(root.left, ans);
    ans.push(root.data);
    this.walk(root.right, ans);
    return ans;
  }

  // Recursive Case: Return of returns
  find(value, root = this.root) {
    if (root == null) {
      return null;
    }
    if (root.data === value) {
      return root;
    }
    if (value < root.data) {
      return this.find(value, root.left);
    }
    return this.find(value, root.right);
  }

  minimun(root = this.root) {
    // console.log('root', root);
    if (root.left == null) {
      return root;
    }
    return this.minimun(root.left);
  }

  maximun(root = this.root) {
    if (root.right == null) {
      return root;
    }
    return this.maximun(root.right);
  }

  succesor(node) {
    return this.minimun(node.right);
  }

  parent(node) {}

  // Recursive Case: Reassignment (move the pointer)
  insert(value, root = this.root) {
    if (root == null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (value > root.data) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }
}

module.exports = Tree;
