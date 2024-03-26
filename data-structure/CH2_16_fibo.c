#include <stdio.h>

int sum(int n) {
  if (n == 1)
    return 1;
  else
    return (n + sum(n - 1));
}
int sum2(int n) {
  int temp = 0;
  for (int i = 1; i <= n; i++) {
    temp += i;
  }

  return temp;
}

int main() {

  printf("%d", sum(6));
  printf("%d", sum2(6));

  return 0;
}