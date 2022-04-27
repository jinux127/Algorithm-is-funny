const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (arr) => {
    const [N, answer] = [arr[0], arr[1].split('').map(Number)];
    const obj = {
        red: {
            pattern: [1, 2, 3, 4, 5],
            cnt: 0,
        },
        blue: {
            pattern: [5, 4, 3, 2, 1],
            cnt: 0,
        },
        yellow: {
            pattern: [3, 3, 3, 3, 3],
            cnt: 0,
        },
    };
    for (const key in obj) {
        for (let i = 0; i < answer.length; i++) {
            obj[key].pattern[i % 5] === answer[i] ? (obj[key].cnt += 1) : null;
        }
    }

    const MAX = Math.max(...Object.values(obj).map((x) => x.cnt));
    console.log(MAX);
    obj[red].cnt === MAX ? console.log('red') : null;
    obj[blue].cnt === MAX ? console.log('blue') : null;
    obj[yellow].cnt === MAX ? console.log('yellow') : null;
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
