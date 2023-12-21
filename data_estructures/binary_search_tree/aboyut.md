# BST Property

Each node of a Binary Search Tree (BST) stores a piece of data. Part of that data is the key by which the BST is organized. Each node in the BST has below it a left subtree and a right subtree. The topmost node is called the root and a node with no subtrees is called a leaf.

The most important property of a BST is:

> For a node, x, with key, k, every key in x's left subtree is less than or equal to k, and every key in x's right subtree is greater than or equal to k.

Note that the definition permits duplicate keys. Some BSTs don't permit duplicate keys. Whether to permit duplicate keys depends upon the application that uses the BST.

### Example

In the tree below, the root contains key 35, every key in the left subtree of the root is less than 35 (these are 11, 20, and 29), and every key in the right subtree is greater than 35 (these are 40, 43, 47, 50, 60, 65, and 72).

This property is true of every node in the tree. For example, the node containing key 50 has 40, 43, and 47 in its left subtree, and has 60, 65, and 72 in its right subtree.
If you were using a Java-enabled Web browser, you would see a binary search tree instead of this paragraph.

Common BST Algorithms
Tree Walks
To "touch" every tree node in order from least to greatest in a tree rooted at x:

InorderWalk(x)
if x != NULL
InorderWalk( left(x) )
print key(x)
InorderWalk( right(x) )

Tree Search
To find the node containing a key, k, in a tree rooted at x:

Search(x,k)
if x == NULL
return NULL
else if k == key(x)
return x
else if k < key(x)
return Search( left(x) )
else
return Search( right(x) )

Example
To search in this BST, type a number in the box and press ``Enter.'' The nodes are highlighted as they are inspected during the search. The last node traversed is coloured green if the search was successful, or red if it wasn't successful.
If you were using a Java-enabled Web browser, you would see a binary search tree instead of this paragraph.

Minimum / Maximum
To find the minimum key in a tree rooted at x:

Minimum(x)
while left(x) != NULL
x = left(x)
return key(x)

Similarly, the maximum key is found in the rightmost node.

Successor / Predecessor
The successor of a node, x, is the node, y, that has the smallest key greater than that of x.
(El menor de los mayores)

The predecessor is the node that has the largest key smaller than that of x.

Where's is x's successor?

If x has a right subtree, succ( x ) is the leftmost element in that subtree.

If x has no right subtree, succ( x ) is the lowest ancestor of x (above x on the path to the root) that has x in its left subtree.

Succ(x)
if right(x) != NULL
return Minimum( right(x) )
else
y = parent(x)
while y != NULL and x == right(y)
x = parent(x)
y = parent(y)
return y
