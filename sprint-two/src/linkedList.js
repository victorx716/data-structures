
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) { 
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    let temp = list.head.value;

    list.head = list.head.next;
    
    return temp;
  };

  list.contains = function(target) {
    let loc = list.head;

    let traverse = function(loc, target) {
      if (loc.value === target) {
        return true;
      } else if (loc.next === null) {
        return false;
      } else {
        return traverse(loc.next, target);
      }
    };
    return traverse(loc, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add- constant
 * remove- constant
 * contains linear
 */