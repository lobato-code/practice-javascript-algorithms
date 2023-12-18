Aqui voy a ir formalizando los apuntes que tengo en hojas

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
