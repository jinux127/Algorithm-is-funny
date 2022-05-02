const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (str) => {
    const [L, R] = str.split(' ');
    const L_Arr = L.split('');
    const R_Arr = R.split('');
    let eightCnt = 0;
    // 12345677, 12345679
    // 8000, 1
    // 8888 9888
    if (R_Arr.length !== L_Arr.length) return 0;

    for (let i = 0; i < R_Arr.length; i++) {
        if (R_Arr[i] === L_Arr[i]) {
            if (R_Arr[i] === '8') eightCnt += 1;
            else break;
        } else {
            break;
        }
    }
    return eightCnt;
};

let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    console.log(sol(input[0]));
    process.exit();
});
