/**
 *
 * Write a function printList(list) that outputs list items one-by-one.
 *
 * Make two variants of the solution: using a loop and using recursion.
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

function printList(list) {
  if (list == null) {
    return;
  }
  console.log(list.value);

  printList(list.next);
}

function printListValueWithLoop(list) {
  let currentList = list;
  while (true) {
    if (currentList === null) {
      break;
    }
    console.log(currentList.value);
    currentList = currentList.next;
  }
}

printList(list);
printListValueWithLoop(list);
