// 4.2 
// Given a sorted (increasing) order array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal innerHeight

// class Node {
//   constructor(val = null, parent = null, left = null, right = null) {
//     this.value = val;
//     this.parent = parent;
//     this.left = left;
//     this.right = right;
//   }

//   left(node) {
//     this.left = node;
//   }

//   right(node) {
//     this.right = node;
//   }

// }

class Node {
  constructor(val = null, next = null) {
    this.value = val;
    this.next= next;
  }

  next(node) {
    this.next = node;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  append(node) {
    if (this.head) {
      this.head.next(node);
      this.tail = node;
    } else {
      this.head = node;
    }
  }
}

// [1,2,3,4,5,6,7]
function minTree(array, node = null) {
  if (array.length === 1) return Node(array[0]);
  const mid = array.length / 2;
  const curr = Node(array[parseInt(mid)]);
  curr.left = minTree(array.slice(0, mid));
  curr.right = minTree(array.slice(mid + 1));
}

// 4.3
// Given a binary tree, design an algorithm which creates a linked list of all the nodes 
// at each depth 
function listOfDepth(node, arr = [], list = new LinkedList) {
  if (node === null) {
    arr.push(list); 
    list = new LinkedList;
    return;
  }
  list.append(node);
  listOfDepth(node.left);
  listOfDepth(node.right);
}


// 4.4 
// Implement a function to check if a binary tree is balanced. For the purposes of the question,
// a balanced tree is defined to be a tree such that the height of the two subtrees of any 
// node never differ by moore than one.
function checkBalanced(node, count = 0, arr = []) {
  if (node.left === null && node.right === null) {
    arr.push(count);
    count -= 1;
    return;
  }
  checkBalanced(node.left, count += 1, arr);
  checkBalanced(node.right, count += 1, arr);
  arr.reduce(function(sum, value) {
    return sum + value;
  }) <= 1;
}

//4.5 

function validateBST(node, bool = true) {
  if (node === null) return;
  if ((node.left !== null && node < node.left) || (node.right !== null && node > node.right)) {
    bool = false;
    return bool;
  }
  validateBST(node.left, bool);
  validateBST(node.right, bool);
  return bool;
}

// 4.6 

function successor(node) {
   if (node.parent > node) return node.parent;
   if (node.parent < node || node.parent === null) {
     let curr = node.right;
     while (curr) {
      curr = curr.left;
     }
     return curr;
   } 
}

// 4.7

function buildOrder(projects, dependencies) {
  dependencies.forEach((dep) => {
    dep[0].child = dep[1];
    dep[1].parent = dep[0];
  });
}

//4.8 
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. 
// Avoid storing additional nodes in a data structure.
function firstCommonAncestor(node1, node2, arr = []) {
  if (node1 === null && node2 === null) return null;
  if (node1 === node2) {
    return node1;
  }
  if (arr.includes(node1) || arr.includes(node2)) {
    if (arr.includes(node1)) {
      return node1;
    } else {
      return node2;
    }
  }
  arr.push(node1, node2);
  return firstCommonAncestor(node1.parent, node2.parent, arr);
}

// 4.9
// A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

function bstSequences(bst) {
  let sequences = [];
  let recurse = function(nodes, traveled) {
    let noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && traveled[node.left.value] === undefined) {
        noChild = false;
        traveled[node.left.value] = true;
        recurse(nodes.concat([node.left]), traveled);
        delete traveled[node.left.value];
      }
      if (node.right !== null && traveled[node.right.value] === undefined) {
        noChild = false;
        traveled[node.right.value] = true;
        recurse(node.concat([node.right]), traveled);
        delete traveled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  };
  let startTravelled = {};
  startTravelled[bst.value] = true;
  recurse([bst], startTravelled);
  return sequences;
}

// 4.10 

function checkSubtree(tree1, tree2) {
  const queue = [tree1];
  let curr = null;
  while (queue.length >= 1) {
    queue.forEach(node => {
      queue.push(node.left);
      queue.push(node.right);
      if (node.left === tree2) {
        curr = node.left;
      } else {
        curr = node.right;
      }
      queue.shift;
    });
  }
  return checkEqual(tree1, tree2);
}

function checkEqual(tree1, tree2, bool = true) {
  if (tree1 !== tree2) {
   bool = false;
   return bool; 
  }
  checkEqual(tree1.left, tree2.left, bool) || checkEqual(tree1.right, tree2.right, bool);
  return bool;
}

// 4.11

function randomNode(tree, arr = []) {
  if (tree === null) return;
  arr.push(tree);
  randomNode(tree.left, arr) || randomNode(tree.right, arr);
  return arr[parseInt(Math.random() * (arr.length))];
}

// 4.12
function sumArr(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

function countPathsWithRoot(tree, value, path) {
  let pathCount = 0;
  if (path === undefined) {
    path = [tree.value];
  } else {
    path = [...path, tree.value];
  }
  if (sumArr(path) === value) {
    pathCount ++;
  }
  if (tree.left !== null) {
    pathCount += countPathsWithRoot(tree.left, value, path);
  }
  if (tree.right !== null) {
    pathCount += countPathsWithRoot(tree.right, value, path);
  }  
  return pathCount;
}

function pathsWithSum(tree, value) {
  let pathCount = 0;
  pathCount += countPathsWithRoot(tree, value);
  if (tree.left !== null) {
    pathCount += countPathsWithRoot(tree.left, value);
  }
  if (tree.right !== null) {
    pathCount += countPathsWithRoot(tree.right, value);
  }
  return pathCount;
}