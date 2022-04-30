const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (str) => {
    let [A, B, C] = str.split(' ').map(Number);

    const func1 = (a, b, c) => {
        if (b === 0) return 1;

        if (b % 2 === 0) {
            const next = func1(a, b / 2, c);
            return (next * next) % c;
        }

        const next = func1(a, b / 2, c);
        return (((next * next) % c) * (a % c)) % c;
    };

    console.log(func1(A, B, C));
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
