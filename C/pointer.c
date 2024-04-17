#include <stdio.h>

int main() {
  int a;
  int *p = &a;

  *p = 200;
  a = 300;
  printf("%d\n", a);
  printf("%d\n", *p);

  return 0;
}