const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (str) => {
    let [A, B, C] = str.split(' ').map(BigInt);

    const func1 = (a, b, c) => {
        if (b === 0n) return 1n;

        if (b % 2n === 0n) {
            const next = func1(a, b / 2n, c);
            return (next * next) % c;
        }

        const next = func1(a, b / 2n, c);
        return (((next * next) % c) * (a % c)) % c;
    };

    console.log(func1(A, B, C).toString());
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
