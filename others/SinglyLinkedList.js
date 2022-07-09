class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length -= 1;

    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let cnt = 0;
    let current = this.head;
    while (cnt !== index) {
      current = current.next;
      cnt += 1;
    }
    return current;
  }

  set(index, value) {
    let target = this.get(index);
    if (target) {
      target.val = value;
      return true;
    }
    return false;
  }
}

const L = new SinglyLinkedList();

L.push(0);
L.push(1);
L.push(2);

console.log(L.get(1));

console.log(L.set(1, 4));
