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

  succesor(value, root = this.root) {
    // if (node.right == null) {
    //   return this.minimun(node.right);
    // }
    // PRimero vamos a hallar al nodo que contiene el value
    if (value < root.data) {
      return this.succesor(value, root.left);
    }
    if (value > root.data) {
      return this.succesor(value, root.right);
    }
    if (root.right == null) {
      return undefined;
    }
    return this.minimun(root.right).data;
  }

  predeccessor(node) {
    return this.maximun(node.left);
  }

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

  delete(value, root = this.root) {
    // Si queremos poner un puntero sobre cada nodo y a la vez no solo visualizarlo sino alterarlo tambien, entonces vamos a requerir recursion asignativa.
    // Lo primero que queremos hacer es escontrar el nodo a eliminar
    if (root == null) return root;
    if (value < root.data) {
      root.left = this.delete(value, root.left);
      return root;
    }
    if (value > root.data) {
      root.right = this.delete(value, root.right);
      return root;
    }
    // Aca llegamos cuando encontramos el nodo buscado
    // En caso de un subnodo o inexistente: Verificamos de que lado esta el subnodo existente y lo retornamos como el nuevo subnodo del nodo padre del nodo a eliminar
    if (root.left == null) {
      const temp = root.right;
      root.right = null;
      return temp;
    }
    if (root.right == null) {
      const temp = root.left;
      root.left = null;
      return temp;
    }
    return root;
  }
}

module.exports = Tree;
