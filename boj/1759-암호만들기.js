const case1 = `4 6
a t c i s w`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [lc, c] = inputCase.toString().trim().split(/\n/);
const [L, C] = lc.split(' ').map(Number);
const arr = c.split(' ').sort();

const sol = () => {
  const moum = ['a', 'e', 'i', 'o', 'u'];
  const visited = new Array(L).fill(false);

  const check = () => {
    let str = '';
    let v = 0;
    for (let i = 0; i < C; i++) {
      if (visited[i]) {
        str += arr[i];
        if (moum.some((ele) => ele === arr[i])) {
          v += 1;
        }
      }
    }

    if (v && L - v >= 2) console.log(str);
  };

  const dfs = (idx, cnt) => {
    if (cnt === L) {
      check();
      return 0;
    }

    if (idx === C) return 0;

    visited[idx] = true;
    dfs(idx + 1, cnt + 1);

    visited[idx] = false;
    dfs(idx + 1, cnt);
  };

  for (let i = 0; i <= C - L; i++) {
    visited[i] = true;
    dfs(i + 1, 1);
    visited[i] = false;
  }
};

sol();
