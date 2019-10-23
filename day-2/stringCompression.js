/**
  String Compression: Implement a method to perform basic string compression using the counts
  of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
  "compressed" string would not become smaller than the original string, your method should return
  the original string. You can assume the string has only uppercase and lowercase letters (a - z).

  input aabcccccaaa --> output a2b1c5a3

 */

function compressedString(str) {
  let s = '';
  let currentChar = str[0];
  let occur = 1;

  for (let i = 1; i <= str.length; i++) {
    if (currentChar !== str[i]) {
      s += currentChar + occur;
      currentChar = str[i];
      occur = 1;
    } else {
      occur += 1;
    }
  }

  return str.length < s.length ? str : s;
}

console.log(compressedString('aabcccccaaa'));
console.log(compressedString('aabcccccaaade'));
console.log(compressedString('a'));
