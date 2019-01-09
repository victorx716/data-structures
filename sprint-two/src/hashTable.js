var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //trying to get bucket with this current index
  var bucket = this._storage[index];
  
  //if bucket does not exist, create one and insert into hash table
  if (!bucket) {
    bucket = [];
    this._storage[index] = bucket;
  }

  var overRide = false;
  
  //should any collisions occur, override them
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      overRide = true;
    }
  }

  //keys have the same index
  if (!overRide) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return undefined;
  }
  //if the key exists within the tuple  [[k, v], [k, v], [other tuples..]]..return the value associated with it
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];

  if (!bucket) {
    return undefined;
  }
  //iterating to verify if key exists within bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      //remove the tuple
      bucket.splice(i, 1);
      return tuple[1]; 
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * Linear in worst case because it will have to search through everything
 * Constant in best case if item is found with a given index right away without having to iterate through the outer array
 * 
 * function time complexities
 * Insert: constant in regards to the input parameters
 * Retrieve: linear, with the worst case being O(n). Best case is O(n/(bucket size))
 * Remove: _.extend(Remove, Retrieve);
 */

