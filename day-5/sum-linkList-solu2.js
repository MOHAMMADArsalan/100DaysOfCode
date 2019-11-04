/**
Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .Thatis,617 + 295.
Output: 2 - > 1 - > 9.That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 - > 1 - > 2.That is, 912.

 */

const Node = function(data) {
  this.data = data;
  this.next = null;
};

function sumListReverse(list1, list2) {
  let num1 = 0,
    num2 = 0,
    carry = 0;
  let sumList = null;
  while (list1 !== null || list2 !== null) {
    if (list1 !== null) {
      num1 = list1.data;
      list1 = list1.next;
    } else {
      num1 = 0;
    }

    if (list2 !== null) {
      num2 = list2.data;
      list2 = list2.next;
    } else {
      num2 = 0;
    }

    const result = num1 + num2 + carry;
    carry = result > 9 ? 1 : 0;
    const val = result % 10;

    if (list1 === null && list2 === null) {
      insert(result);
    } else {
      insert(val);
    }
  }

  function insert(data) {
    let newNode = new Node(data);
    if (sumList === null) {
      return (sumList = newNode);
    }
    var current = sumList;
    while (current.next !== null) {
      current = sumList.next;
    }

    current.next = newNode;
  }

  return sumList;
}

//(7-> 1 -> 6) + (5 -> 9 -> 2) .Thatis,617 + 295.
// const list1 = {
//   data: 7,
//   next: {
//     data: 1,
//     next: {
//       data: 6,
//       next: null,
//     },
//   },
// };
const list1 = {
  data: 9,
  next: {
    data: 7,
    next: {
      data: 8,
      next: null,
    },
  },
};

// const list2 = {
//   data: 5,
//   next: {
//     data: 9,
//     next: {
//       data: 2,
//       next: null,
//     },
//   },
// };

const list2 = {
  data: 6,
  next: {
    data: 8,
    next: {
      data: 5,
      next: null,
    },
  },
};
// const list2 = {
//   data: 3,
//   next: null,
// };

console.log(JSON.stringify(sumListReverse(list1, list2), undefined, 4));
