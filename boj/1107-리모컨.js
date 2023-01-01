const case1 = `5457
3
6 7 8`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);
const N = input[0];
const M = Number(input[1]);
const MInfo = input[2].split(' ').map(Number);

const sol = () => {
  let channel = 100;
  if (N === channel) return 0;

  const nums = new Array(10).fill(true);
  MInfo.forEach((broken) => {
    nums[broken] = false;
  });

  for(let i=0; i<500000;)

};

console.log(sol());
