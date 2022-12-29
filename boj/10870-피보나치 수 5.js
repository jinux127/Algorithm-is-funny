const case1 = `10`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const input = inputCase.toString().trim().split(/\n/);

const sol = () => {
  const fibo = (n) => {
    if (n === 0 || n === 1) return n;

    return fibo(n - 1) + fibo(n - 2);
  };

  console.log(fibo(Number(input[0])));
};

sol();
