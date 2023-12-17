const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();

linkedList.append(3);
linkedList.append(2);
linkedList.append(2);
linkedList.prepend(1);

console.log('size', linkedList.size());
console.log('head', linkedList.head());
console.log('tail', linkedList.tail());
console.log('at', linkedList.at(1));

let currentNode = linkedList.listHead;
while (currentNode != null) {
  console.log(currentNode.value);
  currentNode = currentNode.nextNode;
}
