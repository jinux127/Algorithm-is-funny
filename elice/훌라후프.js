const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (input) => {
    const [N, arr] = [parseInt(input[0]), input[1].split(' ').map(Number)];

    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

    for (let i = 1; i < arr.length; i++) {
        let gcdNumber = gcd(arr[0], arr[i]);
        console.log(`${arr[0] / gcdNumber}/${arr[i] / gcdNumber}`);
    }
};
let input = [];
let cnt = 0;
rl.on('line', function (line) {
    cnt += 1;
    input.push(line);

    if (cnt === 2) rl.close();
});

rl.on('close', function () {
    sol(input);
    process.exit();
});
