const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (str) => {
    const obj = {};
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        !obj[str[i]] ? (obj[str[i]] = 1) : (obj[str[i]] += 1);
    }
    const MAX = Math.max(...Object.values(obj));
    let MAX_alphabet = '';
    let cnt = 0;
    for (let key in obj) {
        if (obj[key] === MAX) {
            cnt += 1;
            MAX_alphabet = key;
        }
        if (cnt > 1) return '?';
    }
    return MAX_alphabet;
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
