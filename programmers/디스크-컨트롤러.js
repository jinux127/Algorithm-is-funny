/**
 * 요청시간대비 작업완료시간이 가장 작은 평균시간 구하기
 * @param {number[][]} jobs [a,b] => a는 요청 시점, b는 작업 시간
 * @returns
 */
function solution(jobs) {
  const count = jobs.length;
  const minHeap = new MinHeap();

  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let complete = 0;
  let total = 0;

  while (jobs.length || minHeap.size()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        minHeap.push(jobs.shift());
      } else break;
    }

    if (minHeap.size() && time >= complete) {
      const task = minHeap.pop();
      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
  }

  return (total / count) >> 0;
}

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

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  getParIdx(curIdx) {
    return (curIdx / 2) >> 0;
  }

  push(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parIdx = this.getParIdx(curIdx);

    while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = this.getParIdx(curIdx);
    }
  }

  pop() {
    const min = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = leftIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    else if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) this.swap(leftIdx, curIdx);
      return min;
    }

    while (this.heap[leftIdx][1] < this.heap[curIdx][1] || this.heap[rightIdx][1] < this.heap[curIdx][1]) {
      const minIdx = this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = leftIdx + 1;

      if (leftIdx >= this.size()) break;
    }

    return min;
  }
}
