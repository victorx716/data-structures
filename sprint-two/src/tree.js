var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
  let doesContain = function (node, target) {

    if (node.value === target) {
      return true;
    }
    
    for (let i = 0; i < node.children.length; i++) {
      if (doesContain(node.children[i], target)){
        return true;
      }
    }

    return false;
  }
  return doesContain(this, target);
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - best case - O(1), worst case - O(n)
 */