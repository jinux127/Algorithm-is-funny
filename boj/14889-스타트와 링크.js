const case1 = `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {};

sol();
