const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [doc, word] = input;
const regex = new RegExp(`${word}`, 'gm');
console.log(doc.match(regex)?.length || 0);
