#include <stdio.h>
#include <stdlib.h>

// 스택을 생성하고 초기화하는 함수
Stack *createStack(int capacity) {
  Stack *stack = (Stack *)malloc(sizeof(Stack)); // 스택 구조체 동적 할당
  stack->items = (int *)malloc(capacity * sizeof(int)); // 스택 배열 동적 할당
  stack->top = -1; // 스택 초기화: 가장 위 요소의 인덱스를 -1로 설정
  stack->capacity = capacity; // 스택의 용량 설정
  return stack;
}

// 스택이 비어있는지 확인하는 함수
int isEmpty(Stack *stack) {
  return stack->top == -1; // 스택의 top이 -1이면 스택이 비어있음
}

// 스택이 가득 찼는지 확인하는 함수
int isFull(Stack *stack) {
  return stack->top ==
         stack->capacity - 1; // 스택의 top이 capacity - 1이면 스택이 가득 찼음
}

// 스택에 요소를 추가하는 함수 (푸시)
void push(Stack *stack, int item) {
  if (isFull(stack)) {
    printf("Stack is full. Cannot push item.\n");
    return;
  }
  stack->items[++stack->top] = item; // 스택의 top을 증가시키고 요소 추가
}

// 스택에서 요소를 제거하고 반환하는 함수 (팝)
int pop(Stack *stack) {
  if (isEmpty(stack)) {
    printf("Stack is empty. Cannot pop item.\n");
    return -1; // 스택이 비어있을 때는 -1을 반환
  }
  return stack->items[stack->top--]; // 스택의 top을 감소시키고 요소 반환
}

// 스택의 가장 위 요소를 반환하는 함수 (탑)
int peek(Stack *stack) {
  if (isEmpty(stack)) {
    printf("Stack is empty. Cannot peek item.\n");
    return -1; // 스택이 비어있을 때는 -1을 반환
  }
  return stack->items[stack->top]; // 스택의 top에 있는 요소 반환
}

// 스택을 삭제하는 함수
void deleteStack(Stack *stack) {
  free(stack->items); // 스택 배열 해제
  free(stack);        // 스택 구조체 해제
}