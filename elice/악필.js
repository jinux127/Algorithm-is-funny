const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (A, B) => {
    const arr_A = A.split('');
    const arr_B = B.split('');

    const MAX =
        Number(arr_A.map((item) => (item === '7' ? '9' : item)).join('')) +
        Number(arr_B.map((item) => (item === '7' ? '9' : item)).join(''));

    const MIN =
        Number(arr_A.map((item) => (item === '9' ? '7' : item)).join('')) +
        Number(arr_B.map((item) => (item === '9' ? '7' : item)).join(''));
    console.log(MAX, MIN);
};
let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(...input[0].split(' '));
    process.exit();
});
