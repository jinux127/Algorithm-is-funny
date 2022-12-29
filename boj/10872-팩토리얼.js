const case1 = `0`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {
  const N = Number(input[0]);

  const facto = (n) => {
    if (n <= 1) return 1;

    return n * facto(n - 1);
  };

  console.log(facto(N));
};

sol();
