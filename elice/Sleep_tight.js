const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (input) => {
    const [X, Y, H] = input.split(' ').map(Number);
    let hypotenuse = 2 * H;
    let cnt = 0;
    while (hypotenuse > 0) {
        cnt += 1;
        hypotenuse -= X;
        if (hypotenuse <= 0) break;
        hypotenuse += Y;
    }
    console.log(cnt);
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
