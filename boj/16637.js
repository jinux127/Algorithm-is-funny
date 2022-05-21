// 괄호 추가하기
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(/\n/);
const N = input[0];
const expression = input[1].split('');

const calc = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
};

const sol = (N, expression) => {
    const operator = [];
    const numArr = [];
    let answer = -Infinity;

    expression.map((item) => {
        item === '+' || item === '-' || item === '*'
            ? operator.push(item)
            : numArr.push(parseInt(item));
    });

    const dfs = (result, idx) => {
        if (idx >= operator.length) {
            answer = Math.max(answer, result);
            return;
        }

        let cur_result = calc[operator[idx]](result, numArr[idx + 1]);
        dfs(cur_result, idx + 1);

        if (idx + 1 < operator.length) {
            let cur_result_2 = calc[operator[idx + 1]](
                numArr[idx + 1],
                numArr[idx + 2]
            );
            dfs(calc[operator[idx]](result, cur_result_2), idx + 2);
        }
    };

    dfs(numArr[0], 0);
    console.log(answer);
};

sol(N, expression);
