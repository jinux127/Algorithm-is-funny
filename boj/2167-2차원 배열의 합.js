const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const [N, M] = input.shift().split(' ').map(Number);

const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input.shift().split(' ').map(Number));
}

const K = input.shift();
const arr2 = [];
while (input.length > 0) {
  arr2.push(input.shift().split(' ').map(Number));
}

const sol = (arr, arr2) => {
  const answer = [];
  arr2.forEach((item) => {
    let [i, j, x, y] = item;
    let temp = 0;

    for (; i <= x; i++) {
      for (let jj = j; jj <= y; jj++) {
        temp += arr[i - 1][jj - 1];
      }
    }
    answer.push(temp);
  });

  console.log(answer.join('\n'));
};

sol(arr, arr2);
