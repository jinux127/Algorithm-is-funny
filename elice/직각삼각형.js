const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
const sol = (arr) => {
    const [a, b, c] = arr.split(" ").sort((a, b) => a - b);
    return a ** 2 + b ** 2 === c ** 2 ? "rightangle" : "triangle";
};
rl.on("line", function (line) {
    if (line === "0") rl.close();
    input.push(line);
});

rl.on("close", function () {
    input.map((item) => console.log(sol(item)));
    process.exit();
});
