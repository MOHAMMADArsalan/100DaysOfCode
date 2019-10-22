/**
 * Implement an algorithm to determine if a string has all unique characters. What if you
    cannot use additional data structures?
    Example 
    input = 'abc' --> output = true;
    input = 'abcab' --> output = false
 */



function checkIsUnique(str) {

  let s = new Set();
  if (!str) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (!s.has(str[i])) {
      s.add(str[i]);
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkIsUnique('abc'))
console.log(checkIsUnique('abcad'));
console.log(checkIsUnique(''))