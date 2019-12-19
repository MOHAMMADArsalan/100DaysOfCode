class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor() {
    this.root = null;
  }

  insert (key) {
    if (this.root === null) {
      this.root = new Node(key)
      return
    }

    this.insertNode(this.root, key)
  }

  insertNode (node, key) {
    if (node.key > key) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  search (key) {
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return node;
    }
  }
}


const bst = new BST();
bst.insert(2)
bst.insert(1)
bst.insert(3)
console.log(JSON.stringify(bst.root, undefined, 4))
console.log(JSON.stringify(bst.search(2)))
console.log(JSON.stringify(bst.search(3)))
console.log(JSON.stringify(bst.search(1)))