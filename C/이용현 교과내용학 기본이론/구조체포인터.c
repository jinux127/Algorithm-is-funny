#include <stdio.h>
#include <stdlib.h>

typedef struct Data {
  char c1;
  int *numPtr; // 포인터
  int num;
} Data;

int main() {
  int num1 = 10;
  Data d1;                                 // 구조체 변수
  Data *d2 = (Data *)malloc(sizeof(Data)); // 구조체 포인터에 메모리 할당

  Data *d3 = (Data *)malloc(sizeof(Data)); // 구조체 포인터에 메모리 할당

  d1.numPtr = &num1;
  d2->numPtr = &num1;
  d3->num = 30;

  int testNum = 311;
  d3->numPtr = &testNum;

  printf("d1.numPtr: %p\n", d1.numPtr);
  printf("*d1.numPtr: %d\n", *d1.numPtr); // 10: 구조체의 멤버를 역참조
  printf("*d2->numPtr: %d\n", *d2->numPtr); // 10: 구조체 포인터의 멤버를 역참조
  printf("d3: %p\n", d3);
  printf("&testNum: %p\n", &testNumz);
  printf("d3->num: %p\n", d3->numPtr);
  printf("*d3->num: %d\n", *d3->numPtr);
  printf("d3->num: %d\n", d3->num);

  d2->c1 = 'a';
  printf("%c\n", (*d2).c1); //  a: 구조체 포인터를 역참조하여 c1에 접근
                            // d2->c1과 같음
  printf("%d\n", *(*d2).numPtr); // 10: 구조체 포인터를 역참조하여 numPtr에
                                 // 접근한 뒤 다시 역참조 *d2->numPtr과 같음

  free(d2);
  free(d3);

  return 0;
}