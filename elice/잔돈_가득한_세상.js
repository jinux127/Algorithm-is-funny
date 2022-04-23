const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const moneyList = [10000, 1000, 100, 10, 1];
const sol = (N) => {
    let change = 10000 - N;
    let cnt = 0;
    moneyList.map((money) => {
        cnt += Math.floor(change / money);
        change -= Math.floor(change / money) * money;
    });

    console.log(cnt);
};

rl.on("line", function (line) {
    sol(parseInt(line));
    rl.close();
});

rl.on("close", function () {
    process.exit();
});
