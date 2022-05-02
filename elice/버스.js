const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (A, B) => {
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    console.log((A * B) / gcd(A, B));
};
let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(...input[0].split(' ').map(Number));
    process.exit();
});
