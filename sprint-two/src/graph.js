

// Instantiate a new graph
var Graph = function() {
  //this.graph = graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.node = {edges: {}};
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (let connections in this.node.edges) {
      this.removeEdge(node, connections)
    }
    delete this.node;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.fromNode.edges.toNode = true;
    this.toNode.edges.fromNode = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


