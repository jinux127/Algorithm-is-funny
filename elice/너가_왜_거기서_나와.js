const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (N) => {
    let str = '';
    for (let i = 1; i <= N; i++) {
        str += i + '';
    }
    console.log(str.split(String(N))[0].length + 1);
};

let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(input[0]);
    process.exit();
});
