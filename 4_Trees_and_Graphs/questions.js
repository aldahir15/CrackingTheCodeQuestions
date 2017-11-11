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
