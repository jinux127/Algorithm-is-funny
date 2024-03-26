#include <stdio.h>
#include <stdlib.h>

// 구조체 선언
typedef struct Node {
  int data;
  struct Node *next;
} Node;

// typedef를 사용한 포인터 선언
typedef Node *NodePtr;

int main(void) {
  // 빈칸 (1): NodePtr 타입의 포인터 변수 head를 선언하여 NULL로 초기화하세요.
  NodePtr head;

  // 빈칸 (2): 동적 메모리를 할당하여 새로운 노드를 생성하고, data에 42를 저장하고 next에는 NULL을 저장하세요.
  NodePtr newNode = (NodePtr)malloc(sizeof(Node));
  newNode->data = 42;
  newNode->next = NULL;

  // 빈칸 (3): head가 newNode를 가리키게 하세요.
  head->next = newNode;

  // 빈칸 (4): 새로운 노드를 생성하여 data에 99를 저장하고 next에는 NULL을 저장하세요.
  NodePtr anotherNode = (NodePtr)malloc(sizeof(Node));
  anotherNode->data = 99;
  anotherNode->next=NULL;

  // 빈칸 (5): newNode의 next를 anotherNode로 설정하세요.
  newNode->next = anotherNode;

  // 빈칸 (6): 반복문을 사용하여 연결 리스트의 각 노드의 data를 출력하세요.
  NodePtr current = head;
  while (current != NULL) {
    printf("%d ", current->data);
    current = current->next;
  }

  // 빈칸 (7): 모든 노드를 순회하면서 할당된 동적 메모리를 해제하세요.
  NodePtr temp;
  while (temp != NULL) {
    temp = current->next;
    free(current);
    current = temp;
  }

  return 0;
}