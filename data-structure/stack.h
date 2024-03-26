#ifndef STACK_H
#define STACK_H

// 스택 구조체 정의
typedef struct {
    int *items; // 스택의 요소를 저장하는 배열
    int top;    // 스택의 가장 위 요소의 인덱스를 나타내는 변수
    int capacity; // 스택의 용량 (최대 요소 수)
} Stack;

// 스택을 생성하고 초기화하는 함수
Stack* createStack(int capacity);

// 스택이 비어있는지 확인하는 함수
int isEmpty(Stack *stack);

// 스택이 가득 찼는지 확인하는 함수
int isFull(Stack *stack);

// 스택에 요소를 추가하는 함수 (푸시)
void push(Stack *stack, int item);

// 스택에서 요소를 제거하고 반환하는 함수 (팝)
int pop(Stack *stack);

// 스택의 가장 위 요소를 반환하는 함수 (탑)
int peek(Stack *stack);

// 스택을 삭제하는 함수
void deleteStack(Stack *stack);

#endif
