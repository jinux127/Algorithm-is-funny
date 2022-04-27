const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (arr) => {
    const [N, expression] = [arr[0], arr[1].split('')];
    const operator = [];
    const numArr = [];
    let answer = 0;
    expression.map((item) => {
        item === '+' || item === '-' || item === '*'
            ? operator.push(item)
            : numArr.push(parseInt(item));
    });

    const calc = (oper, x, y) => {
        switch (oper) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
        }
    };

    const dfs = (result, idx) => {
        if (idx >= operator.length) {
            answer = Math.max(answer, result);
            return;
        }
        let cur_result = calc(operator[idx], result, numArr[idx + 1]);
        dfs(cur_result, idx + 1);

        if (idx + 1 < operator.length) {
            let cur_result_2 = calc(
                operator[idx + 1],
                numArr[idx + 1],
                numArr[idx + 2]
            );
            dfs(calc(operator[idx], result, cur_result_2), idx + 2);
        }
    };

    dfs(numArr[0], 0);
    console.log(answer);
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
