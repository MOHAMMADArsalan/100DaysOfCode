function binarySearch (array, n) {
  if (array.length < 1) {
    return null;
  }

  if(array[0] !== n && array.length === 1) {
    return null
  }
  if(array[0] === n || array[array.length - 1] === n) {
    return n
  }
  let middleIndex = Math.floor(array.length / 2);
  if(array[middleIndex] === n) {
    return n
  } else if(array[middleIndex] > n) {
    return binarySearch(array.slice(0, middleIndex), n)
  } else {
    return binarySearch(array.slice(middleIndex), n)
  }
}

var array = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 8));
console.log(binarySearch(array, 7));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 5));
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 3));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 9));
console.log(binarySearch(array, 10));

// given sorted array
// find given number from array
// check if n is equal to 0 index
// check if n is equal to last index
// then check if n is equal to middle value
// if n is small than the middle value then slice array from 0 to middle
// else slice array from middle to end;
// call function recursively
// base case if array is length is less than 1 return null