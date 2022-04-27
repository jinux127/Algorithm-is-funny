const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (arr) => {
    const numArr = [];
    const answer = new Array(arr.length).fill(1);

    arr.map((item, i) => {
        numArr.push(item.split(' ').map(Number));
    });

    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            numArr[i][0] < numArr[j][0] && numArr[i][1] < numArr[j][1]
                ? (answer[i] += 1)
                : null;
        }
    }

    console.log(answer);
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
