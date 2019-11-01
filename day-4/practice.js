/**
 * create simple link list
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function linkList() {
  this.head = null;

  this.append = function(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  };

  this.removeNode = function(ele) {
    if (ele === this.head.data) {
      this.head = this.head.next;
      return;
    }
    var current = this.head;
    while (current.next !== null) {
      if (current.next.data === ele) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
    }
  };

  this.removeDups = function() {
    if (this.head === null) {
      return null;
    }

    var current = this.head;
    var s = new Set();
    s.add(current.data);
    while (current.next !== null) {
      if (s.has(current.next.data)) {
        current.next = current.next.next;
      } else {
        s.add(current.next.data);
        current = current.next;
      }
    }
  };

  this.appendAdd = function(data, after) {
    var newNode = new Node(data);
    var current = this.head;
    while (current !== null) {
      if (current.data === after) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  };
}
// remove node
// -> 1 -> 2 -> 3 -> null
// -> 1 -> 3 -> null

// insert after
// -> 1 -> 2 -> 4 -> null
// -> 1 -> 2 -> 3 -> 4 -> null
const list = new linkList();

list.append(1);
list.append(2);
list.append(4);

list.appendAdd(3, );

// list.removeNode(5);
// list.removeNode(1);
// list.removeNode(2);
// list.removeNode(4);
// list.removeNode(30);
// list.removeDups();
console.log(JSON.stringify(list.head, undefined, 2));
