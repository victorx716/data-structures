class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.lastIn = 0;
  	this.firstOut = 0;
  	this.storage = {}
  }

  enqueue(value) {
    this.storage[this.lastIn] = value;
    this.lastIn++
  };

  dequeue() {
  if (this.lastIn - this.firstOut === 0) {
    return undefined;
  }

  var leaveTheQueue = this.storage[this.firstOut]
  delete this.storage[this.firstOut];
  this.firstOut++;
  return leaveTheQueue;
  };

  size() {
    return this.lastIn - this.firstOut;
  };
}
