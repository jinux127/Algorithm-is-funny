const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const reverseFunc = (str) => {
    return str.split('').reverse().join('');
};

const sol = (a, b) => {
    const reverseA = reverseFunc(a);
    const reverseB = reverseFunc(b);
    const sumReverseAB = parseInt(reverseA) + parseInt(reverseB);

    console.log(parseInt(reverseFunc(sumReverseAB + '')));
};
let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(...input[0].split(' '));
    process.exit();
});
