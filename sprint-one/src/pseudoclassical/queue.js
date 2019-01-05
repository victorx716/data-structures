var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIn = 0;
  this.firstOut = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.lastIn] = value;
	this.lastIn++
}

Queue.prototype.dequeue = function(value) {
  if (this.lastIn - this.firstOut === 0) {
    return undefined;
  }

  var leaveTheQueue = this.storage[this.firstOut]
  delete this.storage[this.firstOut];
  this.firstOut++;
  return leaveTheQueue;
}

Queue.prototype.size = function() {
	return this.lastIn - this.firstOut;
};

  // var someInstance = {};

  // // Use an object with numeric keys to store values
  // var storage = {};
  // let lastIn = 0;
  // let firstOut = 0;
  // let size = lastIn; //for clarity

  // // Implement the methods below

  // someInstance.enqueue = function(value) {
  //   storage[lastIn] = value;
  //   lastIn++;
  // };

  // someInstance.dequeue = function() {
  // // //is the queue empty?
  // if (lastIn - firstOut === 0) {
  //   return undefined;
  // }

  // var leaveTheQueue = storage[firstOut]
  // delete storage[firstOut];
  // firstOut++;
  // return leaveTheQueue;

  // // { 0: Bob, 1: Jacob, 2: Mike}
  // };
  
  // someInstance.size = function() {
  //   return lastIn - firstOut;
  // };

  // return someInstance;


