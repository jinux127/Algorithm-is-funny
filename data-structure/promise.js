const prom1 = () => {
  return new Promise((res, rej) => {
    console.log('2 prom1');
    res();
  });
};
const prom2 = () => {
  return new Promise((res, rej) => {
    console.log('3 prom2');
    setTimeout(() => {
      console.log('9 promise setTimeout');
      res();
    }, 0);
  });
};
const prom3 = () => {
  return new Promise((res, rej) => {
    console.log('4 prom3');
    rej();
  });
};

console.log('1 before promise');
setTimeout(() => console.log('8 setTimeout before promise'), 0);
prom1().then(() => console.log('6 prom1 -> then'));
prom2().then(() => console.log('10 prom2 -> setTimeout -> then'));
prom3()
  .then(() => console.log('안찍힘 prom3 -> then'))
  .catch(() => console.log('7 prom3 -> catch'));
console.log('5 after promise');
