function swap (array, iIndex, jIndex) {
  const tmp = array[iIndex];
  array[iIndex] = array[jIndex];
  array[jIndex] = tmp;
}
/**
 * in bubble sort we compare two elements, current and next one If current element is less than next element we swap them.
 * bubble sort is better than selection sort as it is adaptive means you can get to know is array is sorted or not.
 *
 */
function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    let swiped = false;
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1)
        swiped = true
      }
    }

    if (!swiped) {
      console.log('SWIPED', i)
      break;
    }
  }
  return array;
}
function bubbleSort1 (array) {
  for (let i = 0; i < array.length; i++) {
    let swiped = false;
    for (let j = 0 ; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        swiped = true
      }
    }

    if (!swiped) {
      console.log('SWIPED', i)
      break;
    }
  }
  return array;
}

// var a = [2, 4, 3, 6, 5, 9, 8, 1, 7];
var a = [1,2,3,4,5,6,7,8,9];
console.log(bubbleSort1(a))