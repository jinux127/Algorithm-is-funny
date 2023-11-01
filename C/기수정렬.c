#include <stdio.h>
 
int main(void)
{
    int radix_bucket[10]; // 0 ~ 9 까지 
    int data[] = { 5, 1, 7, 2, 4, 9, 0 };
    int data_len = sizeof(data) / sizeof(int);
 
    int i = 0, j = 0;
 
    // 기수 버킷 초기화
    for (i = 0; i < 10; i++)
        radix_bucket[i] = -1;
 
    // 정렬 되지 않은 데이터 출력
    for (i = 0; i < data_len; i++)
        printf("%d ", data[i]);
    fputc('\n', stdout);
 
    // 기수 버킷 이용
    for (i = 0; i < data_len; i++)
        radix_bucket[data[i]] = data[i];
 
    // 기수 버킷에서 값을 옮김
    for (i = 0, j = 0; i < 10; i++)
        if (radix_bucket[i]!=-1)
            data[j++] = radix_bucket[i];
 
    // 정렬된 데이터 출력
    for (i = 0; i < data_len; i++)
        printf("%d ", data[i]);
    fputc('\n', stdout);
 
    return 0;
}
