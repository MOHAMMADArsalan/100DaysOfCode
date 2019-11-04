/**
 * Partition: 
Write code to partition a linked list around a value x,
 such that all nodes less than x come
before all nodes greater than or equal to x. 
lf x is contained within the list, the values of x only need
to be after the elements less than x (see below).
The partition element x can appear anywhere in the
"right partition"; 
it does not need to appear between the left and right partitions.
EXAMPLE
Input: 3 -> 5 -> 8 -> 5 - > 10 -> 2 -> 1 [partition = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function partitionList(list, partition) {
//   let left = null,
//     right = null;

//   let current = list;
//   while (current !== null) {
//     let newNode = new Node(current.data);
//     if (current.data < partition) {
//       insertLeft(newNode);
//     } else {
//       insertRight(newNode);
//     }
//     current = current.next;
//   }

//   let currentLeft = left;
//   while (currentLeft.next !== null) {
//     currentLeft = currentLeft.next;
//   }

//   currentLeft.next = right;
//   function insertLeft(newNode) {
//     if (left === null) {
//       left = newNode;
//       return;
//     }
//     var current = left;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   function insertRight(newNode) {
//     if (right === null) {
//       right = newNode;
//       return;
//     }
//     var current = right;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   return left;
// }

function partitionList(list, x) {
  let head = null,
    tail = list;

  while (list !== null) {
    const next = list.next;

    if (list.data < x) {
      list.next = head;
      head = list;
    } else {
      tail.next = list;
      tail = list;
    }
    list = next;
  }

  return head;
}
const list = {
  data: 1,
  next: {
    data: 5,
    next: {
      data: 3,
      next: {
        data: 8,
        next: {
          data: 5,
          next: {
            data: 10,
            next: {
              data: 8,
              next: null,
            },
          },
        },
      },
    },
  },
};

console.log(JSON.stringify(partitionList(list, 5), undefined, 4));
