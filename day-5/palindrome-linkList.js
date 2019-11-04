/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function palindrome(list) {
  let reversedList = null;
  var current = list;

  while (current !== null) {
    let newNode = new Node(current.data);
    if (reversedList === null) {
      reversedList = newNode;
    } else {
      newNode.next = reversedList;
      reversedList = newNode;
    }
    current = current.next;
  }

  current = list;
  var reversedCurrentNode = reversedList;

  while (current !== null) {
    if (current.data !== reversedCurrentNode.data) {
      return false;
    }
    current = current.next;
    reversedCurrentNode = reversedCurrentNode.next;
  }
  return true;
}

const list = {
  data: 'm',
  next: {
    data: 'a',
    next: {
      data: 'd',
      next: {
        data: 'a',
        next: {
          data: 'm',
          next: null,
        },
      },
    },
  },
};

const list1 = {
  data: 'f',
  next: {
    data: 'a',
    next: {
      data: 'c',
      next: {
        data: 'e',
        next: null,
      },
    },
  },
};

console.log(palindrome(list));
console.log(palindrome(list1));
