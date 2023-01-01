const case1 = `3
CCP
CCP
PPC`;

const inputCase = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin') : case1;
const [N, ...arr] = inputCase.toString().trim().split(/\n/);

const sol = () => {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
};

sol();
