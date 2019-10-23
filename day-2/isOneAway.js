/**
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false

 */

function compareStr(str1, str2) {
  let s = new Set();
  let charDiff = 0;
  for (let char of str1) {
    s.add(char);
  }

  for (let i = 0; i < str2.length; i++) {
    if (!s.has(str2[i])) {
      charDiff += 1;
    }
    if (charDiff > 1) {
      return false;
    }
  }

  return true;
}
function isOneAway(str1, str2) {
  let charDiffLength = Math.abs(str1.length - str2.length);
  if (charDiffLength > 1) {
    return false;
  }

  if (str1.length < str2.length) {
    return compareStr(str2, str1);
  } else if (str1.length > str2.length) {
    return compareStr(str1, str2);
  } else {
    return compareStr(str1, str2);
  }
}

/**
 * pale, pIe -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
 */
console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pales", "pale"));
console.log(isOneAway("pale", "bale"));
console.log(isOneAway("pale", "bake"));
console.log(isOneAway("pake", "bake"));