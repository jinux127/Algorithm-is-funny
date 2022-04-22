const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
    rl.close();
});

rl.on("close", function () {
    const [N, M] = input[0].split(" ").map(Number);
    const visited = new Array(N + 1).fill(false);
    const arr = [...Array(N + 1)].map((v, i) => i);
    const result = [];

    const dfs = (idx, cnt) => {
        if (cnt === M) {
            const temp = [];
            for (let i = 0; i < visited.length; i++) {
                if (visited[i]) temp.push(i);
            }
            result.push(temp.join(" "));
            return;
        }

        for (let i = idx; i < arr.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            dfs(i, cnt + 1);
            visited[i] = false;
        }
    };

    dfs(1, 0);
    console.log(result.join("\n"));

    process.exit();
});
