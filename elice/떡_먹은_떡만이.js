const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (arr) => {
    const numArr = arr.map((item) => item.split(' ').map(Number));
    let target = 1;

    numArr.map((item) => {
        item[0] === target
            ? (target = item[1])
            : item[1] === target
            ? (target = item[0])
            : null;
    });

    console.log(target);
};

let input = [];
let cnt = 0;
let N = 0;
rl.on('line', function (line) {
    cnt += 1;
    if (cnt === 1) N = parseInt(line);
    else if (cnt > 1 && cnt < N + 1) {
        input.push(line);
    } else if (cnt === N + 1) {
        input.push(line);
        rl.close();
    }
});

rl.on('close', function () {
    sol(input);
    process.exit();
});
