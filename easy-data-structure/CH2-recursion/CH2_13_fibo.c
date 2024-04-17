#include <stdio.h>

int fib(int n) {
  if (n == 1)
    return 1;
  else
    return (fib(n - 1) + n);
}

int main() {

  printf("%d", fib(6));

  return 0;
}