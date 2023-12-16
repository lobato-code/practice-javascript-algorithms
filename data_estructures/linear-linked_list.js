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
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();

linkedList.append(3);
linkedList.append(2);
linkedList.append(2);
linkedList.prepend(1);

let currentNode = linkedList.listHead;
while (currentNode != null) {
  console.log(currentNode.value);
  currentNode = currentNode.nextNode;
}
