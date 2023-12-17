const Node = require('./Node');

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let temp = this.listHead;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let temp = null;
    if (this.listHead != null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
  }

  size() {
    let temp = this.listHead;
    let count = 0;
    while (temp != null) {
      count += 1;
      temp = temp.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead?.value || null;
  }

  tail() {
    let temp = this.listHead;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp.value;
  }

  at(index) {
    let temp = this.listHead;
    let count = 0;
    while (count !== index && temp != null) {
      temp = temp.nextNode;
      count += 1;
    }
    if (temp?.value) {
      return temp.value;
    }
    return null;
  }
}

module.exports = LinkedList;
