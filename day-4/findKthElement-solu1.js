/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */

function findKthElement(list, kth) {
  let size = 0;
  var current = list;
  while (current !== null) {
    size += 1;
    current = current.next;
  }
  let diff = size - kth;
  if (diff < 0) {
    return null;
  }
  current = list;
  for (let i = 0; i < diff; i++) {
    current = current.next;
  }
  return current;
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

console.log(findKthElement(list, 500));
