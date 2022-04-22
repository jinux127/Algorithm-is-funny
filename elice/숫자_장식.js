const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
    input.push(line);
    rl.close();
});

rl.on("close", function () {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = [...Array(N + 1)].map((v, i) => i);
    const temp = [];

    const dfs = (cnt) => {
        if (cnt === M) {
            console.log(temp.join(" "));
            return;
        }

        for (let i = 1; i < arr.length; i++) {
            temp.push(arr[i]);
            dfs(cnt + 1);
            temp.pop();
        }
    };

    dfs(0);

    process.exit();
});
