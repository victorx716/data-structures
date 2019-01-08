var BinarySearchTree = function(value) {
    //instantiate instance of tree using prototypal creation style
    var instance = Object.create(BinarySearchTree.prototype);
    instance.value = value;
    instance.right = undefined;
    instance.left = undefined;
  
    return instance
  };
  
  BinarySearchTree.prototype.insert = function (value) {
    var node = BinarySearchTree(value);
  
    function traverse(tree) {
    //compare the value of the passed in node with the current node to determine where it goes
      if (tree.value > value && tree.left === undefined) {
        tree.left = node;
      } else if (tree.value > value) {
        traverse(tree.left);
      } else if (tree.value < value && tree.right === undefined) {
        tree.right = node;
      } else if (tree.value < value) {
        traverse(tree.right);
      }
    }
  
    traverse(this);
  }
  
  BinarySearchTree.prototype.contains = function (value) {
    //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    var doesContain = false;
    function traverse(tree) {
      if (tree.value === value) {
        doesContain = true;
        // if the tree has children, recurse the function
      } else if (tree.left !== undefined && value < tree.value) {
        traverse(tree.left);
      } else if (tree.right !== undefined && value > tree.value) {
        traverse(tree.right)
      }
    }
  
    traverse(this);
    return doesContain;
  }
  
  BinarySearchTree.prototype.depthFirstLog = function (cb) {
    //accepts a callback and executes it on every value contained in the tree.
    function traverse(tree) {
      cb.call(tree, tree.value)
  
      if (tree.left !== undefined) {
        traverse(tree.left)
      }
  
      if (tree.right !== undefined) {
        traverse(tree.right);
      }
    }
  
    traverse(this);
  }


/*
 * Complexity: What is the time complexity of the above functions?
 */
