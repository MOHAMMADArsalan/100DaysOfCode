/**
 * Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.

 */

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printWithRecursion(list) {
  if (list == null) {
    return;
  }

  printWithRecursion(list.next);
  console.log(list.value);
}

function printWithLoop(list) {
  let array = [];
  let tmp = list;
  while (true) {
    if (tmp === null) {
      break;
    }
    array.push(tmp.value);
    tmp = tmp.next;
  }
  for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
printWithRecursion(list);
printWithLoop(list);
