const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const sol = (param) => {
  const result = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i] === '#') break;
    result.push(param[i].match(/[a|e|i|o|u]/gi)?.length || 0);
  }
  console.log(result.join('\n'));
};

sol(input);
