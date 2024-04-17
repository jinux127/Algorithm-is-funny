// #include <stdio.h>

// int main(void) {
//   char ch;
//   char str[] = {'a', 'b', 'c', 'd', 'e', 'f',
//                 'g', 'h', 'i', 'j', '\0'}; // 크기 지정 및 널 문자 추가
//   printf("%s \n\n", str);

//   scanf("%c\n", &ch);
//   printf("ch = %c\n", ch);

//   scanf("%s", str); // 배열의 크기만큼 문자열을 받도록 함
//   printf("str = %s\n", str);

//   return 0;
// }
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
  char ch;
  char str[] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', '\0'};
  printf("%s \n\n", str);

  scanf("%c\n", &ch);
  printf("ch = %c\n", ch);

  scanf("%s", &str);
  printf("str = %s\n", str);
}