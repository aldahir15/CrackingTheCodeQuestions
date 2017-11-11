// 4.2 
// Given a sorted (increasing) order array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal innerHeight

class Node {
  constructor(val = null, parent = null, left = null, right = null) {
    this.value = val;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }

  left(node) {
    this.left = node;
  }

  right(node) {
    this.right = node;
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

