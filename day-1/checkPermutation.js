/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the
  other.

  input "abc" , "cba" --> true
  input "abc", "def" --> false
  input "abc", "abcd" --> false
 */

function sort (str) {
  let charArray = str.split("");
  charArray.sort();
  return charArray.join("")
}

function checkPermutation2(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  return sort(str1) === sort(str2);
}

function checkPermutation(str1, str2) {

  if (!str1 || !str2) {
    return false;
  }

  if (str1.length !== str2.length) {
    return false
  }

  let s = new Set();

  for (let char of str1) {
    s.add(char);
  }

  for (let char of str2) {
    if (!s.has(char)) {
      return false
    }
  }

  return true
}


console.log(checkPermutation('abc', 'cba'));
console.log(checkPermutation('abc', 'def'));
console.log(checkPermutation('abc', 'cbad'));
console.log("-----------------------------------")
console.log(checkPermutation2('abc', 'cba'));
console.log(checkPermutation2('abc', 'def'));
console.log(checkPermutation2('abc', 'cbad'));