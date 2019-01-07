// Instantiate a new graph
var Graph = function(node) {
  this.nodes = {};
  // this.node = node;
  // this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if (!this.contains(node)) {
  //   this.node = {edges: {}};
  // }
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to 
// contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return !!this.node;
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if (this.contains(node)) {
  //   for (let connections in this.node.edges) {
  //     this.removeEdge(node, connections)
  //   }
  //   delete this.node;
  // }
  delete this.nodes[node];
  for (var key in this.nodes) {
    if (this.nodes[key][node]) {
      delete this.nodes[key][node]
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected. 
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)) {
  //   this[fromNode].edges[toNode] = true;
  //   this[toNode].edges[fromNode] = true;
 this.nodes[fromNode][toNode] = true;
 this.nodes[toNode][fromNode] = true; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)) {
  //   delete this[fromNode].edges[toNode]
  //   delete this[toNode].edges[fromNode]
  // }
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key, this.nodes[key])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


