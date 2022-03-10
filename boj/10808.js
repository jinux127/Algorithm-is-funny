// 알파벳 개수

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const S = input.shift();

const sol = (S) =>{
    const charCode_a = 'a'.charCodeAt();
    const charCode_z = 'z'.charCodeAt();
    const count_alphabet = new Array(charCode_z-charCode_a+1).fill(0);

    for (let i = 0; i < S.length; i++) {
        count_alphabet[S[i].charCodeAt() - charCode_a]++;
    }

    console.log(count_alphabet.join(' '));
}

sol(S);
