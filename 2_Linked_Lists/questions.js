class Node {
  constructor(val = null, prev = null, next = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }

  append(node) {
    this.next = node;
  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  length() {
    return this.count;
  }

  addLast(data) {
    const node = new Node(data);
    if (this.count === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.count += 1;
  }

  addFirst(data) {
    const node = new Node(data);
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.count += 1;

    if (this.count === 1) {
      this.tail = this.head;
    }
  }

  removeFirst(data) {
    if (this.count > 0) {
      this.head = this.head.next;
      this.count--;
      if (this.count == 0) {
        this.tail = null;
      }
    }
  }

  removeLast(data) {
    if (this.count > 0) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }

        current.next = null;
        this.tail = current;
      }
      this.count--;
    }
  }
}

const link = new LinkedList();

link.addFirst(5);
link.addLast(10);
link.addLast(15);
link.addLast(20);
link.addLast(30);
link.addLast(40);
link.addLast(40);
link.addLast(10);
link.addLast(20);
link.addLast(25);
console.log(link);

// 2.1
function removeDups(node) {
  let newList = new LinkedList();
  const arr = [];
  let current = node;
  while (current !== null) {
    if (!(arr.includes(current.value))) {
      newList.addLast(current.value);
      arr.push(current.value);
    }
    current = current.next;
  }
  return newList;
}

// removeDups(link.head);

// 2.2 
// Singly List
function returnKthToLast(node, k) {
  let pointer1 = node;
  let pointer2 = node;
  let count = 0;
  while (pointer1 !== null) {
    count += 1;
    pointer1 = pointer1.next;
  }
  const tot = count - k - 1;
  for (let i = 0; i < tot; i++) {
    pointer2 = pointer2.next;
  }
  return pointer2;
}

returnKthToLast(link.head, 2);