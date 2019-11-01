/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */

function findKthElement(list, kth) {
  let left = list,
    right = list;

  for (let i = 0; i < kth; i++) {
    if (right === null) return null;

    right = right.next;
  }

  while (right !== null) {
    right = right.next;
    left = left.next;
  }

  return left.data;
}

const list = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null,
      },
    },
  },
};

console.log(findKthElement(list, 4));
