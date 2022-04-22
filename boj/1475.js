// 방 번호

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(/\n/);

const sol = (input) => {
    const arr = input[0].split("").map(Number);
    const numObj = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        0: 0,
    };

    arr.map((item) =>
        item === 6 || item === 9 ? (numObj[6] += 1) : (numObj[item] += 1)
    );
    numObj[6] = Math.ceil(numObj[6] / 2);

    console.log(Math.max(...Object.values(numObj)));
};

sol(input);
