/**
 * String Rotation: Assume you have a method isSubstring which checks ifone word is asubstring
of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").

 */

function isSubstring(s1, s2) {
  if (s1 === '' && s2 === '') {
    return true;
  }
  if (s1 == '' || s2 == '') {
    return false;
  }

  const firstChar = s1[0];
  let s2Part1 = '';
  let s2Part2 = '';

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === firstChar) {
      s2Part1 = s2.slice(i);
      s2Part2 = s2.slice(0, i);
      break;
    }
  }
  return s1 === s2Part1 + s2Part2;
}

console.log( isSubstring('waterbottle','erbottlewat'))
console.log( isSubstring('waterbottle','erbottleat'))
console.log( isSubstring('abc','cab'))
