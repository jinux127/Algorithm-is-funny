const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    if (!line) rl.close();
    else {
        input.push(line);
    }
});

rl.on("close", function () {
    console.log(input);
    process.exit();
});
