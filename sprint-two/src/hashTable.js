var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // --> storage [ [key, value], ...]
  // storage => [[[key, value], [key, value] ], ['7', true] ]
  /*
  for loop {
    iterate through _storage.length
    if element is an array and is not defined, then we push in the key and value.
    1. if it is a subarray we can push stuff into it 
    2. create an array _storage[i] = empty array 
      a. have index _storage[i].push json.stringify the key, value in 
    3. no return value
  }
  */
  let pikachu = this._storage;
  let raichu = this._storage[index];

  for ( let i = 0; i < this._storage.length; i++){
    if (!Array.isArray(pikachu[i])) {
      pikachu[i] = [];
      //insert the value into here if its the correct index
      // pikachu[i].set(k, v);
      //verify the index
    }  
  }
    pikachu.set(index, [k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let pikachu = this._storage;
  let raichu = this._storage[index];

  for (var j = 0; j < pikachu.get(index).length; j++) {
    if ((pikachu.get(index)[j][0]).indexOf(k) !== -1) {
      return pikachu.get(index)[j][1]
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let pikachu = this._storage;
  let raichu = this._storage[index];
  pikachu.set(index, undefined);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


