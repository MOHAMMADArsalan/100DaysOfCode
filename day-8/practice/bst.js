class Node {
  constructor(key) {
    this.key = key;
    this.right = null;
    this.left = null;
  }
}


class BST {
  constructor() {
    this.root = null;
  }
  insert (value) {
    if (this.root === null) {
      this.root = new Node(value)
      return
    }
    this.insertNode(this.root, value)
  }

  insertNode (node, value) {

    if (node.key > value) {
      if (node.left === null) {
        node.left = new Node(value)
      } else {
        this.insertNode(node.left, value)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.insertNode(node.right, value)
      }
    }
  }

  inOrder (node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.key);
      this.inOrder(node.right)
    }
  }

  preOrder(node) {
    if(node) {
      console.log(node.key);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if(node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key)
    }
  }
}

const bst = new BST();
bst.insert(3)
bst.insert(2)
bst.insert(1)
bst.insert(4)
bst.insert(5)

console.log(JSON.stringify(bst.root, undefined, 4))
bst.inOrder(bst.root)
bst.preOrder(bst.root)
bst.postOrder(bst.root)