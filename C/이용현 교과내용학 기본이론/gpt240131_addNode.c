#include <stdio.h>
#include <stdlib.h>

// 구조체 선언
typedef struct Node {
  int data;
  struct Node *next;
} Node;

// typedef를 사용한 포인터 선언
typedef Node *NodePtr;

// 노드를 연결 리스트에 추가하는 함수
void addNode(NodePtr *head, int newData) {
  NodePtr newNode = (NodePtr)malloc(sizeof(Node));
  newNode->data = newData;
  newNode->next = NULL;

  // 연결 리스트가 비어있을 경우
  if (*head == NULL) {
    *head = newNode;
  } else {
    // 연결 리스트가 비어있지 않을 경우
    NodePtr current = *head;
    while (current->next != NULL) {
      current = current->next;
    }
    current->next = newNode;
  }
}

// 연결 리스트의 노드를 출력하는 함수
void printList(NodePtr head) {
  NodePtr current = head;
  while (current != NULL) {
    printf("%d ", current->data);
    current = current->next;
  }
  printf("\n");
}

int main(void) {
  // 노드를 추가할 때마다 head를 출력하여 연결 리스트의 변화를 확인
  NodePtr head = NULL;

  addNode(&head, 42);
  printList(head);

  addNode(&head, 99);
  printList(head);

  // 메모리 해제
  NodePtr current = head;
  while (current != NULL) {
    NodePtr temp = current->next;
    free(current);
    current = temp;
  }

  return 0;
}