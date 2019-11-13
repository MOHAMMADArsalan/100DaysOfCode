function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.preOrder = preOrder;
  this.find = find;
  this.min = min;
  this.max = max;

  function insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;

        if (current === null) {
          parent.right = newNode;
          break;
        }
      }
    }
  }

  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      console.log(node.data);
      inOrder(node.right);
    }
  }

  function postOrder(node) {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.data);
    }
  }

  function preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  function min() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  function max() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  function find(data) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }

    return current;
  }
}

var bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(100);


bst.inOrder(bst.root);

console.log('======================================');
bst.postOrder(bst.root);

console.log('======================================');
bst.preOrder(bst.root);

console.log('======================================');
console.log(bst.min());

console.log('======================================');
console.log(bst.max());
console.log('======================================');
console.log(bst.find(3));

console.log(JSON.stringify(bst.root, undefined, 4));