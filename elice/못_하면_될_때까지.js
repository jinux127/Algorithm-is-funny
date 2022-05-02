// 못하면 될때까지
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (s) => {
    let num = 1;
    let cnt = 0;
    while (!(s < num)) {
        s -= num;
        num += 1;
        cnt += 1;
    }
    console.log(cnt);
};

let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(parseInt(input[0]));
    process.exit();
});
