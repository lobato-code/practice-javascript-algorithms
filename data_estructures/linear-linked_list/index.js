const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();

// Test methods: adding first items

linkedList.append(3);
linkedList.append(2);
linkedList.append(2);
linkedList.prepend(1);

// Initial List

let currentNode = linkedList.listHead;
let listString = '';
while (currentNode != null) {
  listString += `${currentNode.value.toString()} - `;
  currentNode = currentNode.nextNode;
}
listString += null;
console.log('Initial list: ', listString);

// Test methods
console.log('size', linkedList.size());
console.log('head', linkedList.head());
console.log('tail', linkedList.tail());
console.log('at', linkedList.at(1));
console.log('pop', linkedList.pop(), 'size-1', linkedList.size());
console.log('contains', linkedList.contains(3));
console.log('find', linkedList.find(3));
console.log('toString', linkedList.toString(3));
