var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance['length'] = 0;
  someInstance['storage'] = {};
  return someInstance;
};

var stackMethods = {

	push : function(value) {
		this.storage[this.length] = value;
		this.length++;
	},

	pop: function() {
		if (this.length === 0) {
			return undefined;
		} else {

		this.length--;
  	let temp = this.storage[this.length]
  	delete this.storage[this.length]
  	return temp;
		}

	},
	
	size: function() {
		return this.length;
	}

};

