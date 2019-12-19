class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue (data) {
    this.queue.push(data);
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
      return this.root = new Node(key)
    }

    this.insertNode(this.root, key)
  }

  insertNode (node, key) {
    if (node.key > key) {
      if (node.left === null) {
        node.left = new Node(key);
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

  breathFirstSearch () {
    let queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      console.log(current.key)
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right)
      }
    }
  }

  mirror () {
    this.mirrorBST(this.root)
  }

  mirrorBST (node) {
    if (node === null) {
      return null
    }

    this.mirrorBST(node.left);
    this.mirrorBST(node.right)

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
}

const bst = new BST();
bst.insert(2);
bst.insert(2);
bst.insert(0)
bst.insert(3)
bst.insert(4)
bst.insert(5)
console.log(JSON.stringify(bst.root, undefined, 4))
console.log(bst.breathFirstSearch())
bst.mirror()
console.log(JSON.stringify(bst.root, undefined, 4))
