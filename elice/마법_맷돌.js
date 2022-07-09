const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (s, t) => {
    const arr = t.split(s).filter((v) => v !== '');

    if (!arr.length) console.log(1);
    else {
        const arr2 = arr.map((v) =>
            t.split(v).filter((item) => item !== '').length !== 0 ? false : true
        );

        console.log(
            arr2.indexOf(true) !== -1 && arr2.indexOf(false) === -1 ? 1 : 0
        );
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
    input.sort((a, b) => a.length - b.length);

    sol(input[0], input[1]);
    // console.log(!sol(input[0], input[1]) ? 1 : 0);
    process.exit();
});
