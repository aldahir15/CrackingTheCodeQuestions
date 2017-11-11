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