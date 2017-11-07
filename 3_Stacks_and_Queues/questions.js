// 3.1
// We cand divide the array in three equal parts and allow th individual stack
// To grow in that limited space.
// Stack 1, we will use [0, n/3)
// Stack 2, we will use [n/3, 2n/3)
// Stack 3, we will use [2n/3, n)

// 3.2
// If we keep track of the minimum of each state, then we 
// would be able to know that minimum even if we popped. This works
// because we know we can only pop from one way, so we keep track 
// of a local min. To find the min, you just look at what the top 
// thinks is the min.
// When we push an element onto the stack, the element is given the
// current minimum. It sets its "local min" to be the min

class Stack {
  constructor() {
    this.top = null;
    this.min = null;
  }

  pop() {
    if (this.top === null) return;
    const item = this.top.value;
    this.top = this.top.next;
    return item;
  }

  push(item) {
    let newMin;
    if (this.min === null) {
      newMin = item;
    } else {
      newMin = Math.min(item, this.min);
    }
    this.min = newMin;
    const t = new NodeWithMin(item, this.top, newMin);
    this.top = t;
  }

  peek() {
    if (this.top === null) return;
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  minimum() {
    return this.top.min;
  }
}

class NodeWithMin {
  constructor(v, next, min) {
    this.value = v;
    this.next = next;
    this.min = min;
  }
}

let sstack = new Stack();
sstack.push(5);
sstack.push(7);
// sstack.push(2);
// sstack.push(3);
// sstack.push(1);
sstack.minimum();

// 3.3 

class Stack2 {
  constructor(max = 5) {
    this.stack = this;
    this.top = null;
    this.min = null;
    this.count = 0;
    this.max = max;
  }

  pop() {
    if (this.top === null) return;
    const item = this.top.value;
    this.top = this.top.next;
    this.count -= 1;
    return item;
  }

  push(item) {
    let newMin;
    if (this.min === null) {
      newMin = item;
    } else {
      newMin = Math.min(item, this.min);
    }
    this.min = newMin;
    const t = new NodeWithMin(item, this.top, newMin);
    this.add();
    this.top = t;
  }

  add() {
    if (this.count + 1 === this.max) {
      const newStack = new Stack2(this.max);
    } else {
      this.count ++;
    }
  }

  peek() {
    if (this.top === null) return;
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }

  minimum() {
    return this.top.min;
  }
}

// let sstack = new Stack();
// sstack.push(5);
// sstack.push(7);
// sstack.push(2);
// sstack.push(3);
// sstack.push(1);

// 3.4 

class MyQueue {
  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  size() {
    return this.stackNewest.size() + this.stackOldest.size();
  }

  add(val) {
    // Push onto stackNewest, which always has the newest elements on top
    this.stackNewest.push(val);    
  }

  shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }

  peek() {
    this.shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.peek(); //retrve the oldest item
  }

  remove() {
    this.shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.pop(); // pop the oldest item
  }
}

// 3.5

function sort(stack) {
  const newStack = new Stack();
  while (!stack.isEmpty()) {
    // Insert each element in stack in sorted order into newStack
    const temp = stack.pop();
    while (!newStack.isEmpty() && newStack.peek() > temp) {
      stack.push(newStack.pop());
    }
    newStack.push(temp);
  }

  // Copy the elements from newStack back to stack
  while (!newStack.isEmpty()) {
    stack.push(newStack.pop());
  }
}
