#include <stdio.h>

double fib(int n) {
  if (n == 1)
    return 1;
  else
    return (fib(n - 1) + (double)1 / n);
}

int main() {

  printf("%f", fib(6));

  return 0;
}