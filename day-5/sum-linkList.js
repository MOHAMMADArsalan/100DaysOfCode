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
  let num1 = '',
    num2 = '';
  let sumList = null;
  while (list1 !== null || list2 !== null) {
    if (list1 !== null) {
      num1 = list1.data + num1;
      list1 = list1.next;
    }
    if (list2 !== null) {
      num2 = list2.data + num2;
      list2 = list2.next;
    }
  }

  let length = num1.length > num2.length ? num1.length : num2.length;
  let result = Number(num1) + Number(num2);
  let str = result.toString();
  let i = 0;
  while (i < length) {
    let sliceValue = length - i;
    let _str =
      i === length - 1
        ? str.slice(0, i)
        : str.slice(sliceValue, sliceValue + 1);
    let newList = new Node(_str);
    if (sumList === null) {
      sumList = newList;
    } else {
      let tem = sumList;
      sumList = newList;
      sumList.next = tem;
    }
    i++;
  }

  return sumList;
}

//(7-> 1 -> 6) + (5 -> 9 -> 2) .Thatis,617 + 295.
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

//Does your algorithm work on linked lists like 9->7->8 and 6->8->5? Double check that.
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
//   data: 5,
//   next: null,
// };

console.log(JSON.stringify(sumListReverse(list1, list2), undefined, 4));
