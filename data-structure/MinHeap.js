class MinHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parIndex = (curIndex / 2) >> 0;

    while (curIndex > 1 && this.heap[parIndex] > this.heap[curIndex]) {
      this.swap(parIndex, curIndex);
      curIndex = parIndex;
      parIndex = (curIndex / 2) >> 0;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIndex = 1;
    let leftIndex = curIndex * 2;
    let rightIndex = curIndex * 2 + 1;

    if (!this.heap[leftIndex]) return min;

    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[curIndex]) {
        this.swap(leftIndex, curIndex);
      }
      return min;
    }
    // 위에 조건에 걸리지 않는 경우 왼쪽과 오른쪽 자식이 모두 있는 경우이다.
    // 따라서 현재 노드가 왼쪽 또는 오른쪽 보다 큰 지 작은지를 검사하며 반복한다.
    while (this.heap[leftIndex] < this.heap[curIndex] || this.heap[rightIndex] < this.heap[curIndex]) {
      // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체하면 된다.
      const minIndex = this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(minIndex, curIndex);
      curIndex = minIndex;
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }

    return min;
  }
}
