#include <stdio.h>
#include <stdlib.h>

int combi2(int n, int k) {
  if (k == 0 || k == n)
    return 1;
  return (combi2(n - 1, k - 1) + combi2(n - 1, k));
}
int combi(int n, int k) {
  int i, j;
  int C[n + 1][k + 1]; // 2차원 배열 선언

  // 계산된 값을 저장할 배열 초기화
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= min(i, k); j++) {
      if (j == 0 || j == i)
        C[i][j] = 1;
      else
        C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }

  return C[n][k]; // 결과 반환
}
int min(int a, int b) {
  if (a <= b)
    return a;
  else
    return b;
}
int combi(int n, int k) {
  int i, j;
  int C[n + 1][k + 1]; // 2차원 배열 선언

  // 계산된 값을 저장할 배열 초기화
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= min(i, k); j++) {
      if (j == 0 || j == i)
        C[i][j] = 1;
      else
        C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }

  return C[n][k]; // 결과 반환
}

int main() {

  printf("%d\n", combi(5, 2));
  printf("%d", combi2(5, 2));

  return 0;
}