const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (nickName, arr) => {
    console.log(
        arr
            .map((item) => (item + item).split(nickName).length)
            .filter((item) => item > 1).length
    );
};

const input = [];
const arr = [];
let cnt = 0;
let N = 0;
let cnt2 = 0;
rl.on('line', function (line) {
    cnt += 1;
    if (cnt === 1) input.push(line);
    else if (cnt === 2) {
        N = parseInt(line);
    } else {
        cnt2 += 1;
        arr.push(line);
        if (cnt2 === N) rl.close();
    }
});

rl.on('close', function () {
    sol(input[0], arr);
    process.exit();
});
