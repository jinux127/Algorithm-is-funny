const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (arr) => {
    const [N, scores] = [arr.shift(), ...[arr]];

    const average = scores.reduce((acc, cur) => acc + cur, 0) / N;
    console.log(
        ((scores.filter((item) => item > average).length / N) * 100).toFixed(
            3
        ) + '%'
    );
};
let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(input[0].split(' ').map(Number));
    process.exit();
});
