#include <stdio.h>

int main()
{
    int i, num, sum = 0;
    scanf("%d", &num);
    for (i = 1; i < num; i++)
    {
      if(num % i == 0){
        sum += i;
      }
    }

      if(sum  == num){
        printf("%d=완전수", num);
      }
    return 0;
}
