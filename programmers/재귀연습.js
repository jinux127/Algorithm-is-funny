// factorial
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5));

// fibo
// n 번째 항
const fibo = (n) => {
  if (n === 1 || n === 2) return 1;

  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(10));
