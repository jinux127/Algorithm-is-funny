class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(val) {
    this.heap.push(val);
    let cur = this.heap.length - 1;
    let par = (cur / 2) >> 0;

    while (cur > 1 && this.heap[par] < this.heap[cur]) {
      this.swap(cur, par);
      cur = par;
      par = (cur / 2) >> 0;
    }
  }

  pop() {
    const max = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = cur * 2;
    let right = cur * 2 + 1;

    if (!this.heap[left]) return max;
    if (!this.heap[right]) {
      if (this.heap[left] > this.heap[cur]) this.swap(left, cur);
      return max;
    }

    while (this.heap[left] > this.heap[cur] || this.heap[right] > this.heap[cur]) {
      const maxIndex = this.heap[left] < this.heap[right] ? right : left;
      [this.heap[maxIndex], this.heap[cur]] = [this.heap[cur], this.heap[maxIndex]];
      cur = maxIndex;
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return max;
  }

  getMax() {
    return this.heap[1] ? this.heap[1] : null;
  }

  size() {
    return this.heap.length - 1;
  }
}
