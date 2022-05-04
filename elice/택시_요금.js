const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (N, arr) => {
    let a = 0;
    let b = 0;
    arr.map((item) => {
        a += (Math.floor(item / 100) + 1) * 100;
        b += (Math.floor(item / 200) + 1) * 180;
    });

    console.log(a < b ? `삼보운수 ${a}` : `강남운수 ${b}`);
};
let input = [];
let cnt = 0;
rl.on('line', function (line) {
    cnt += 1;
    input.push(line);
    if (cnt === 2) rl.close();
});

rl.on('close', function () {
    sol(parseInt(input[0]), input[1].split(' ').map(Number));
    process.exit();
});
