function reverseStr (str) {

  if (str.length <= 1) return str;

  return reverseStr(str.slice(1)) + str.slice(0, 1);
}

console.log(reverseStr('HELLO'))
console.log(reverseStr('OLLEH'))