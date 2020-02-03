function defaultComparator (x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1
  }

  return 1;
}

function swap (array, iIndex, jIndex) {
  const temp = array[iIndex];
  array[iIndex] = array[jIndex];
  array[jIndex] = temp
}
function quickSort (unsortedArray, comparator = defaultComparator) {

  const sortedArray = [...unsortedArray];

  function recusiveSort (start, end) {
    if (end - start < 1) {
      return
    }

    const pivotValue = sortedArray[end];
    let splitIndex = start;

    for (let i = start; i < end; i++) {
      const sort = comparator(sortedArray[i], pivotValue);

      if (sort === -1) {

        if (splitIndex !== i) {
          swap(sortedArray, splitIndex, i);
        }
      }
      splitIndex++;

    }

    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    recusiveSort(start, splitIndex - 1);
    recusiveSort(splitIndex + 1, end)
  }

  recusiveSort(0, sortedArray.length - 1);

  return sortedArray;

}