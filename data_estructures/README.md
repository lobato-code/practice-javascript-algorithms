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

En el Binary Tree que estamos implmentando, no puede haber duplicados

Algo que tuve que tomar en cuenta al implementar el insert() es que los nodos en el Binary Tree estan formados tal que: LEFT <- ROOT -> RIGHT. Se debe cumplir una condicion: LEFT < ROOT < RIGHT

### Dudas

No entiendo como es que el utlimo _return_ salvo el dia

```js
insert(value, root = this.root) {
    console.log('root', root);
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
```
