/**
 * Remove Dups: Write code to remove duplicates from an unsorted linked list.
   FOLLOW UP
   How would you solve this problem if a temporary buffer is not allowed?

 */

// function addListItem(list, item) {
//   var current = list;
//   while (current.next !== null) {
//     current = current.next;
//   }

//   current.next = item;
// }
function removeDup(list) {
  if (list === null) {
    return null;
  }

  var current = list;
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

  return list;
}

const list = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 2,
        next: {
          data: 4,
          next: null,
        },
      },
    },
  },
};

console.log(JSON.stringify(removeDup(list), undefined, 3));
