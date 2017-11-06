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

// returnKthToLast(link.head, 2);

// 2.3 
// function deleteMiddleNode(node, data) {
//   let current = node;
//   let count = 0;
//   while (current !== null) {
//     if (count !== 0 && current.next !== null && current.value === data) {
//       const temp = current.prev;
//       console.log(current.prev.next);
//       current.prev.next = current.next;
//       current.next.prev = temp;
//       break;
//     } else {
//       current = current.next;
//     }
//     count += 1;
//   }
//   return node;
// }

// deleteMiddleNode(link.head, 20);

// 2.4 
function partition(node, part) {
  const leftArr = [];
  const rightArr = [];
  const leftList = new LinkedList();
  const rightList = new LinkedList();
  let current = node;
  while (current !== null) {
    if (current.value >= part) {
      rightArr.push(current.value);
      rightList.addLast(current);
    } else {
      leftArr.push(current.value);
      leftList.addLast(current);
    }
    current = current.next;
  }
  current = rightList.head;
  while (current !== null) {
    leftList.addLast(current);
    current = current.next;
  }
  return leftList;
}

partition(link.head, 20);

// 2.5

const link1 = new LinkedList();
link1.addLast(7);
link1.addLast(1);
link1.addLast(6);

const link2 = new LinkedList();
link2.addLast(5);
link2.addLast(9);
link2.addLast(2);

function sumList(node1, node2) {
  let num1 = [];
  let num2 = [];
  let current1 = node1;
  let current2 = node2;
  while (current1 !== null) {
    num1.unshift(`${current1.value}`);
    current1 = current1.next;
  }
  while (current2 !== null) {
    num2.unshift(`${current2.value}`);
    current2 = current2.next;
  }
  num1 = Number(num1.join(""));
  num2 = Number(num2.join(""));
  const tot = num1 + num2;
  const newList = new LinkedList();
  String(tot).split("").reverse().forEach(num => {
    newList.addLast(Number(num));
  });
  return newList;
}

// sumList(link1.head, link2.head);

// 2.6 
const pal = new LinkedList();
pal.addLast("a");
pal.addLast("h");
pal.addLast("a");

function isPalindrome(node) {
  const arr = [];
  let current = node;
  while (current !== null) {
    arr.push(current.value);
    current = current.next;
  }
  return arr.join("") === arr.reverse().join("");
}

isPalindrome(pal.head);

// 2.7
function intersection(node1, node2) {
  const arr = [];
  let current = node1;
  while (current !== null) {
    arr.push(current.value);
    current = current.next;
  }
  current = node2;
  let final = null;
  while (current !== null) {
    console.log(current);
    if (arr.includes(current) && final === null) {
      final = current;
    }
    current = current.next;
  }
  return final;
}

intersection(link1.head, link2.head);

// 2.8 
const loop = new LinkedList();
loop.addLast("A");
loop.addLast("B");
loop.addLast("C");
loop.addLast("D");
loop.addLast("E");
loop.addLast("C");
loop.addLast("F");


function loopDetect(node) {
  const arr = [];
  let current = node;
  while (!(arr.includes(current.value))) {
    arr.push(current.value);
    current = current.next;
  }
  return current.value;
}

loopDetect(loop.head);