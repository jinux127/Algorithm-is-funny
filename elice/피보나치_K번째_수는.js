const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (k) => {
    const arr = new Array();
    arr[0] = 0n;
    arr[1] = 1n;
    if (k < 2) return arr[k].toString();

    for (let i = 2; i <= k; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[k].toString();
};

let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    console.log(sol(input[0]));
    process.exit();
});
