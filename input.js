/**
 * ver.1
 */
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (param) => {};

sol(param);

/**
 * ver.2
 */
const case1 = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {};

sol();
