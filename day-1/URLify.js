/**
 * URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith      "
Output: "Mr%20John%20Smith"

 */


function URLify(str) {

  let validCharIndex = 0;

  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] !== ' ') {
      validCharIndex = i;
      break;
    }
  }
  let s = '';
  for (let i = 0; i <= validCharIndex; i++) {
    if (str[i] === ' ') {
      s += '%20'
    } else {
      s += str[i]
    }
  }

  return s;
}

console.log(URLify('Mr John Smith      '))
console.log(URLify('Mr   John    Smith      '))
console.log(URLify('Mr John Smith      '))