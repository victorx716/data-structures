var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let lastIn = 0;
  let firstOut = 0;
  let size = lastIn; //for clarity

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIn] = value;
    lastIn++;
  };

  someInstance.dequeue = function() {
  //is the queue empty?
  if (lastIn - firstOut === 0) {
    return undefined;
  }

  var leaveTheQueue = storage[firstOut]
  delete storage[firstOut];
  firstOut++;
  return leaveTheQueue;

  // { 0: Bob, 1: Jacob, 2: Mike}
  };
  
  someInstance.size = function() {
    return lastIn - firstOut;
  };

  return someInstance;
};
