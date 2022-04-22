const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const sol = (input) => {
    let [C, S, E] = input.split(" ").map(Number);
    C % 2 !== 0 ? E - 1 : null;

    let cnt = Math.min(Math.floor(C / 2), S); // 조합 가능한 수
    E -= C - cnt * 2 + S * cnt; // 반납해야할 수 = ((조합하고 남은 젓가락) + (조합하고 남은 숟가락))

    while (E > 0) {
        // 반납해야할 수가 남아 있다면 조합이 된 세트를 풀어 3개를 반납
        E -= 3;
        cnt -= 1;
    }

    console.log(cnt);
};

rl.on("line", function (x) {
    sol(x);
    rl.close();
}).on("close", function () {
    process.exit();
});
