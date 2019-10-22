/**
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

  You just have to count all the letters and check if there are letters with odd counts. 
  If there are more than one letter with an odd counts the string does not satisfy the above 
  palindrome condition. Furthermore, since a string with an even number 
  letters must not have a letter with an odd count it is not necessary to check 
  whether string length is even or not
    EXAMPLE
    Input: Tact Coa
    Output: True (permutations: "taco cat". "atco cta". etc.)

 */


function palindromePermutation(str) {
  str = str.toLowerCase();
  const letterCount = {};
  let letter = '',
    palindromeSum = 0;

  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    if (letter !== ' ') {
      letterCount[letter] = letterCount[letter] || 0;
      letterCount[letter]++
    }

  }

  for (const letter in letterCount) {
    palindromeSum += letterCount[letter] % 2;
  }

  return palindromeSum < 2
}

console.log(palindromePermutation('aaa'))
console.log(palindromePermutation('Tact Coa'))
console.log(palindromePermutation('abc'))
console.log(palindromePermutation('atco cta'))
