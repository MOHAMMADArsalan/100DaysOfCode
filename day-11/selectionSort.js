function swap (array, iIndex, jIndex) {
  const tmp = array[iIndex];
  array[iIndex] = array[jIndex];
  array[jIndex] = tmp;
}
/**
 * in selection sort we pick first element and check in array to find smallest one
 * If we found smallest element then swap smallest element with current one.
 *
 * It takes O(N^2) time in run and O(N) in swap
 *
 */
function selectionSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j)
      }
    }
  }
  return array;
}

var a = [5, 2, 4, 1, 3];

console.log(selectionSort(a));