const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (N, M, needToConvert) => {
    N = parseInt(N);
    M = parseInt(M);
    const arr = needToConvert.split(' ').map(Number);
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === M) {
                cnt += 1;
                arr[j] = 0;
            }
        }
    }

    console.log(cnt);
};
let input = [];
let cnt = 0;
rl.on('line', function (line) {
    cnt += 1;
    input.push(line);
    if (cnt === 3) rl.close();
});

rl.on('close', function () {
    sol(...input);
    process.exit();
});
