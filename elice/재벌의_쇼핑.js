const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const sol = (N, S, arr) => {
    let result = Infinity;
    let sum = 0;
    let end = 0;
    for (let start = 0; start < N; start++) {
        while (sum < S && end < N) {
            sum += arr[end];
            end += 1;
        }
        if (sum >= S) result = Math.min(result, end - start);

        sum -= arr[start];
    }
    console.log(result === Infinity ? 0 : result);
};

let input = [];
let cnt = 0;
rl.on("line", function (line) {
    cnt += 1;
    input.push(line);
    if (cnt === 2) rl.close();
});

rl.on("close", function () {
    const [N, S] = input.shift().split(" ").map(Number);
    const arr = input.shift().split(" ").map(Number);
    sol(N, S, arr);
    process.exit();
});
