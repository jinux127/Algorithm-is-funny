#include <stdio.h>

int main()
{
    int number[2];
    int result[2] = {0,};
    int temp = 0;
    for(int i = 0; i < 2; i++)
    {
        printf("수를 입력하시오: ");
        scanf("%d", &number[i]);
    }

    // 일단 정렬 
    if(number[0] > number[1]){
        temp = number[0];
        number[1] = number[0];
        number[0] = temp;
    }

    result[0] += number[0];
    result[1] += number[1];

    while (result[0] != result[1])
    {
        result[0] += number[0];
        if(result[0] > result[1]){ 
            result[1] += number[1];
        }
    }
    
    printf("최소 공배수는 %d입니다.", result[0]);

    return 0;
}