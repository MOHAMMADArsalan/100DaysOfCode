/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 */

function Stack() {
  this.stack = [];

  this.append = function(data) {
    this.stack.push(data);
  };

  this.pop = function() {
    return this.stack.pop();
  };
}

function palindrome(list) {
  let stack = new Stack();

  var current = list;

  while (current !== null) {
    stack.append(current.data);
    current = current.next;
  }

  current = list;

  while (current !== null) {
    if (current.data !== stack.pop()) {
      return false;
    }

    current = current.next;
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
