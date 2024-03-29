/**
 * 보유한 병사 n 명으로 적의 공격을 막음
 * 한 라운드에 enemy[i] 병사 소모
 * 무적권 사용 시 병사 소모 없이 막을 수 있음
 * 무적권 사용 횟수는 k
 * 최대한 많은 라운드 진행
 * @param {number} n 보유한 병사 수
 * @param {number} k 무적권 횟수
 * @param {Array} enemy 적 배열
 * @returns
 */
function solution(n, k, enemy) {
  const heap = new Heap();
  let answer = 0;

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);

    n -= enemy[i];

    if (n < 0) {
      if (k) {
        const max = heap.pop();

        n += max;
        k--;
      } else break;
    }
    answer++;
  }

  return answer;
}

class Heap {
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

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
