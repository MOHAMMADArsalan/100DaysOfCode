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
}

var bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(6);
console.log(bst.root);
bst.inOrder(bst.root);
console.log("======================================")
bst.postOrder(bst.root);
console.log("======================================")
bst.preOrder(bst.root);
