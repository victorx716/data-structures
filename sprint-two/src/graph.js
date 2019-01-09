// Instantiate a new graph
var Graph = function(node) {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];  
  for (var key in this.nodes) {
    if (this.nodes[key][node]) {
      delete this.nodes[key][node]
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].hasOwnProperty(toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
 this.nodes[fromNode][toNode] = 1;
 this.nodes[toNode][fromNode] = 1; 
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode]
};

Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode- constant (setting value given a key)
 * removeNode - linear (iterating through keys)
 * contains- constant (retrieving if a value exists, already given a key)
 * addEdge - constant (same as reason for contains)
 * hasEdge- constant (same as reason for contains)
 * removeEdge - constant (same as reason for contains)
 * forEachNode - linear - iterating through the object
 */
