/**
 * Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
 * input 5 --> out 1 + 2 + 3 + 4 + 5 = 15
 */

function sumOfNumber (n) {
  if(n === 1) {
    return 1;
  }
  return n + sumOfNumber( n - 1);
}

// without recursion

function sumOfNum (n) {
  return n * (n + 1) / 2
}

console.log(sumOfNumber(100));
console.log(sumOfNumber(5));
console.log(sumOfNum(100));
console.log(sumOfNum(5));
