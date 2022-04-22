const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let cnt = 0;

rl.on("line", function (line) {
    cnt += 1;
    input.push(line);
    if (cnt === 2) rl.close();
});

rl.on("close", function () {
    const [N, arr] = [input[0], input[1].split(" ").map(Number)];
    const result = [];
    result[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i] * (i + 1);
        temp -= result.reduce((acc, cur) => (acc += cur), 0);
        result.push(temp);
    }
    console.log(result.join(" "));
    process.exit();
});

// 5
// 1 2 2 3 4
