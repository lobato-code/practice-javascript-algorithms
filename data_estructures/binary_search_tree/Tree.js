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

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    const mid = parseInt((start + end) / 2, 10);
    const root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }
}

module.exports = Tree;
