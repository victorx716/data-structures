var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) { 
    if (list.head === null) {
    list.head = Node(value);
    list.tail = list.head;
    } else {
      list.head.next = Node(value);
      list.tail = list.head.next;
    }
    
    //.addToTail() method, takes a value and adds it to the end of the list
    // current list.tail -> value;
    //list.tail = value; 
    //value.list = null;
    //value.tail = tail;
    
  };

  list.removeHead = function() {
    
    list.head = list.tail;
    
  };

  list.contains = function(target) {
    //variable for if target was found
    //base case of if list.head.next === target 
    //else variable === false

    //
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
 */
