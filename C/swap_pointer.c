#include <stdio.h>
void swap(int *p, int *q) {
  int temp;
  temp = *p;
  *p = *q;
  *q = temp;
}

int main() {
  int a = 1, b = 2;

  printf("a: %d,b: %d\n", a, b);
  swap(&a, &b);
  printf("swap(a,b)\n");
  printf("a: %d,b: %d", a, b);
  return 0;
}