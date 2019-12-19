class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue (data) {
    this.queue.push(data)
  }

  dequeue () {
    return this.queue.shift();
  }

  isEmpty () {
    return this.queue.length === 0;
  }
}

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
    if (node === null) {
      return null
    }
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return node;
    }
  }

  inOrder (node) {
    if (node !== null) {
      this.inOrder(node.left)
      console.log(node.key);
      this.inOrder(node.right)
    }
  }

  preOrder (node) {
    if (node !== null) {
      console.log(node.key)
      this.preOrder(node.left);
      this.preOrder(node.right)
    }
  }

  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.key)
    }
  }

  min () {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.key
  }

  max () {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.key
  }

  breathFirstSearch(){
    let quere = new Queue();
    quere.enqueue(this.root);

    while (!quere.isEmpty()) {
      let current = quere.dequeue();
      console.log(current.key)
      if (current.left !== null) {
        quere.enqueue(current.left)
      }

      if (current.right !== null) {
        quere.enqueue(current.right)
      }
    }
  }
}


const bst = new BST();
bst.insert(2)
bst.insert(1)
bst.insert(3)
// console.log(JSON.stringify(bst.root, undefined, 4))
// console.log(JSON.stringify(bst.search(2)))
// console.log(JSON.stringify(bst.search(3)))
// console.log(JSON.stringify(bst.search(1)))
// console.log(bst.min())
bst.breathFirstSearch()