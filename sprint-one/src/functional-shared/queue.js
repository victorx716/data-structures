var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['lastIn'] = 0;
  someInstance['firstOut'] = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

	enqueue : function(value) {
		this.storage[this.lastIn] = value;
		this.lastIn++;
	},

	dequeue: function() {
  if (this.lastIn - this.firstOut === 0) {
    return undefined;
  }

  var leaveTheQueue = this.storage[this.firstOut]
  delete this.storage[this.firstOut];
  this.firstOut++;
  return leaveTheQueue;

	},

	size: function() {
		return this.lastIn - this.firstOut;;
	}
};


