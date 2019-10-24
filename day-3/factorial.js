/**
 * The factorial of a natural number is a number multiplied by "number minus one",
 * then by "number minus two", and so on till 1. The factorial of n is denoted as n!
 *
 * Example:
 * 1! = 1
 * 2! = 2 * 1 = 2
 * 3! = 3 * 2 * 1 = 6
 * 4! = 4 * 3 * 2 * 1 = 24
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 */

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
