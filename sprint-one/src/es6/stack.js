class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.length = 0;
  	this.storage = {}
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++
  };

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    this.length--;
    let result = this.storage[this.length];
    delete this.storage[this.size]
    return result;
  };

  size() {
    return this.length;
  };
}