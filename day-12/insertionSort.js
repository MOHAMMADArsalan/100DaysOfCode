function swap (array, iIndex, jIndex) {
  let tmp = array[iIndex];
  array[iIndex] = array[jIndex];
  array[jIndex] = tmp;
}

function insertionSort (array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1)
      } else {
        break
      }
    }
  }
  return array;
}