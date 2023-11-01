#include <stdio.h>
#include <stdbool.h>

int test_and_set(int *target){
    int rv = *target; // 이전 target값을 저장
    *target = 1; // target값을 1로 바꿈
    return rv; // 이전 target 값을 반환
  }

int main(void)
{
  int lock = 0; 
  printf("%d\n",test_and_set(&lock)); // 이전 target 값을 반환
  printf("%d",lock); // target 값은 바뀌어 있다.
  
  return 0;
}
