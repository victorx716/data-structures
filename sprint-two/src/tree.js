var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me... is an array?
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //given a value,compare it with the left or right 
  
};

treeMethods.contains = function(target) {
  //probably recursive. checks this node and all children node 
  //new function declaration 
  // let doesContain = function (currentNode, target){

  //   if (target === currentNode.value) { //this might be not the correct reference
  //     return true;  
  //   } else if (currentNode.children.length > 0) { //the truthy argument
  //     //call recursively
  //     return doesContain(currentNode.children, target)
  //   } else {
  //     return false;
  //   }
  // }

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
