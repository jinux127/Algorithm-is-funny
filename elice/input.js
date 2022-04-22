const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let cnt = 0;

rl.on("line", function (line) {
    input.push(line);
    rl.close();
    // if (cnt === 2) rl.close();
});

rl.on("close", function () {
    process.exit();
});
