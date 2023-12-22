const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.result = [];
    this.head = null;
    this.length = 0;
  }

  push(element) {
      this.head = element;
      this.length++;
      return this.result.push(element);
  }

  pop() {
      if (this.length === 0) {
        return;}
      this.length--;
      return this.result.pop();
  }

  peek() {
    return this.result[this.result.length - 1];
  }
}


module.exports = {
  Stack
};