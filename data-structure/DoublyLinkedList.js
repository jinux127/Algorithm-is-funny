class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let targetNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = targetNode.prev;
      this.tail.next = null;
      targetNode.prev = null;
    }

    this.length -= 1;
    return targetNode;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length -= 1;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let cnt = 0;
    let value = null;
    if (index < this.length / 2) {
      value = this.head;
      while (cnt === index) {
        value = this.head.next;
        cnt += 1;
      }
    } else {
      value = this.tail;
      cnt = this.length - 1;
      while (cnt === index) {
        value = this.head.prev;
        cnt -= 1;
      }
    }
    return value;
  }
}

const DLL = new DoublyLinkedList();

DLL.push(1);
DLL.push(12);
DLL.push(13);
DLL.push(14);
DLL.push(15);
DLL.push(16);
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.pop());
console.log(DLL.get(0));
// console.log(DLL);
