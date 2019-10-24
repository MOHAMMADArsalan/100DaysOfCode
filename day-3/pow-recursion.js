/**
 * find the power of number
 *
 * input 2 , 3 --> output 8
 */

function pow(x, n) {
  if (n === 1) {
    return x;
  }

  return x * pow(x , n -1);
}

console.log(pow(2, 3));
