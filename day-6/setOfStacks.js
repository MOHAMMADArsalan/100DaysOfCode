/**
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
(that is, pop ( ) should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement afunction popAt (int index) which performs a pop operation on aspecific sub-stack.

 */


function SetOfStacks(max = 50) {
  this.max = max;
  let currentStack = 0;
  this.stack = [[]];
  this.push = function (item) {
    let currentStackSize = this.stack[currentStack].length;
    if (currentStackSize === this.max) {
      currentStack++;
      this.stack[currentStack] = []
    }
    this.stack[currentStack].push(item);
  }
  this.pop = function () {
    return this.popItem(currentStack)
  }



  this.popAt = function (index) {
    return this.popItem(index)
  }

  this.popItem = function (index) {
    let item = this.stack[index].pop();
    let currentStackSize = this.stack[index].length;

    if (currentStackSize === 0) {
      currentStack--;
    }
    return item;

  }
}

const stack = new SetOfStacks(5);
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.popAt(0)
stack.popAt(0)
stack.popAt(1)
stack.popAt(2)
stack.popAt(1)
stack.popAt(2)