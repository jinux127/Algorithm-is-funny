const case1 = `3
4
7
10`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [N, ...arr] = inputCase.toString().trim().split(/\n/).map(Number);

const sol = () => {
  /**
   * 1
   * 2  1 1 2 (2)
   * 3  1 1 1 / 1 2 / 2 1 / 3 (4)
   * 4  1 1 1 1 / 1 1 2 / 1 2 1 / 2 1 1 / 2 2 / 1 3 / 3 1 / 4 (7)
   * 5  1 1 1 1 1 / 1 1 1 2 (4) / 1 2 2 (3) / 1 1 3 (3) / 2 3 (2) (13)
   * a[n] = a[n-1] + a[n-2] + a[n-3]
   */
  const a = [0, 1, 2, 4];

  for (let i = 4; i <= Math.max(...arr); i++) {
    a[i] = a[i - 1] + a[i - 2] + a[i - 3];
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(a[arr[i]]);
  }
};

sol();
