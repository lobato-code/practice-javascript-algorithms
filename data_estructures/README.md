You will need two classes or factories:

LinkedList class / factory, which will represent the full list.
Node class / factory, containing a value property and a link to the nextNode, set both as null by default.
Build the following functions in your linked list class:

**append(value)** adds a new node containing value to the end of the list
**prepend(value)** adds a new node containing value to the start of the list
**size** returns the total number of nodes in the list
**head** returns the first node in the list
**tail** returns the last node in the list
**at(index)** returns the node at the given index
**pop** removes the last element from the list
**contains(value)** returns true if the passed in value is in the list and otherwise returns false.
**find(value)** returns the index of the node containing value, or null if not found.
**toString** represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
Extra credit
**insertAt(value, index)** that inserts a new node with the provided value at the given index.
**removeAt(index)** that removes the node at the given index.
Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

```js
const linkedList = {
  listHead: {
    value: 1,
    nextNode: {
      value: 2,
      nextNode: {
        value: 2,
        nextNode: {
          value: 3,
          nextNode: null,
        },
      },
    },
  },
};
```

So, in summary, _prev is not a copy of the linked list but rather a reference_ to a specific node in the list. Modifying the properties of that node through the prev reference directly affects the linked list structure. I hope this clears up any confusion

Cada cosa nueva que aprenda merece un apunte en el README del proyecto
