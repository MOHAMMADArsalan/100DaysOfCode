/**
 * Given two (singly) linked lists, determine if the two lists intersect. Return the
intersecting node. Note that the intersection is defined based on reference, not value. That is, if the
kth node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.

  Note:
    1) intersection nodes by reference
    2) if tail of both list are not same return false
 */

function getLengthAndTails(list) {
  if (list === null) {
    return null;
  }
  let size = 0;
  var current = list;
  while (current.next !== null) {
    size++;
    current = current.next;
  }
  return {
    tail: current,
    size,
  };
}

function getKthNode(list, k) {
  var current = list;

  while (k > 0 && current !== null) {
    current = current.next;
    k--;
  }

  return current;
}

function intersection(list1, list2) {
  let result1 = getLengthAndTails(list1);
  let result2 = getLengthAndTails(list2);

  if (result1.tail !== result2.tail) {
    return false;
  }

  let shorter = result1.size < result2.size ? list1 : list2;
  let longer = result1.size < result2.size ? list2 : list1;
  longer = getKthNode(longer , Math.abs(result2.size - result1.size));
  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return longer;
}

const list = {
  data: 4,
  next: {
    data: 5,
    next: null,
  },
};

const list1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: list,
    },
  },
};

const list2 = {
  data: 6,
  next: {
    data: 7,
    next: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: list,
        },
      },
    },
  },
};

console.log(intersection(list1, list2));
