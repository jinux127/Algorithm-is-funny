const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (N) => {
    // const arr = new Array(parseInt(N) + 1).fill(true);
    // 약수의 개수가 짝수면 앞면, 홀수면 뒷면
    // console.log(
    //     arr
    //         .map((item, i) => (countDivisor(i) % 2 === 0 ? true : false))
    //         .filter((item) => !item).length
    // );

    // function countDivisor(N) {
    //     let cnt = 0;
    //     for (let i = 1; i <= Math.sqrt(N); i++) {
    //         if (Math.pow(i, 2) === N) cnt += 1;
    //         else if (N % i === 0) cnt += 2;
    //     }
    //     return cnt;
    // }

    console.log(Math.floor(Math.sqrt(N)));
};
let input = [];

rl.on('line', function (line) {
    input.push(line);
    rl.close();
});

rl.on('close', function () {
    sol(input[0]);
    process.exit();
});
