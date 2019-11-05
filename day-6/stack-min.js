/**
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min
    which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 */


function getMin(stack) {
  let min = stack[0];
  stack.forEach(item => {
    if (item < min) {
      min = item
    }
  });

  return min;
}
function StackMin() {
  this.stack = [];
  let min = null;


  this.pop = function () {
    let item = this.stack.pop();

    if (item === min) {
      min = getMin(this.stack)
    }
    return item;
  }

  this.push = function (item) {
    if (min === null) {
      min = item;
    } else if (item < min) {
      min = item;
    }

    this.stack.push(item)
  }

  this.min = function () {
    return min
  }
}

const stack = new StackMin();

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(9);
stack.push(1);


console.log(stack.stack)
console.log(stack.min())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.min())