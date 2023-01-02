const case1 = `4 6
a t c i s w`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [lc, c] = inputCase.toString().trim().split(/\n/);
const [L, C] = lc.split(' ').map(Number);
const arr = c.split(' ');

const sol = () => {
  const moum = ['a', 'e', 'i', 'o', 'u'];
  console.log(arr.sort());
};

sol();
