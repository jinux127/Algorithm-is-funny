const case1 = `27`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {
  const N = Number(input[0]);
  const drawStar = (n) => {
    if (n <= 3)
      return `***
    * *
    ***`;
  };
};

sol();
