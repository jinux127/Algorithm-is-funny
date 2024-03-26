#include <stdio.h>
#include <stdlib.h>

// 연결 리스트의 노드 구조체
typedef struct Node {
  int data;          // 데이터
  struct Node *next; // 다음 노드를 가리키는 포인터
} Node;

// 연결 리스트의 구조체
typedef struct LinkedList {
  Node *head; // 리스트의 시작 노드를 가리키는 포인터
} LinkedList;

// 노드를 생성하는 함수
Node *createNode(int data) {
  Node *newNode = (Node *)malloc(sizeof(Node));
  if (newNode != NULL) {
    newNode->data = data;
    newNode->next = NULL;
  }
  return newNode;
}

// 연결 리스트를 초기화하는 함수
void initializeList(LinkedList *list) { list->head = NULL; }

// 연결 리스트의 끝에 노드를 추가하는 함수
void appendNode(LinkedList *list, int data) {
  Node *newNode = createNode(data);
  if (newNode == NULL) {
    printf("Memory allocation failed.\n");
    return;
  }

  // 리스트가 비어있을 경우
  if (list->head == NULL) {
    list->head = newNode;
  } else {
    // 리스트가 비어있지 않을 경우 끝까지 이동
    Node *current = list->head;
    while (current->next != NULL) {
      current = current->next;
    }
    current->next = newNode;
  }
}

// 연결 리스트의 내용을 출력하는 함수
void printList(const LinkedList *list) {
  const Node *current = list->head;
  while (current != NULL) {
    printf("%d -> ", current->data);
    current = current->next;
  }
  printf("NULL\n");
}

// 연결 리스트의 메모리를 해제하는 함수
void freeList(LinkedList *list) {
  Node *current = list->head;
  Node *next;

  while (current != NULL) {
    next = current->next;
    free(current);
    current = next;
  }

  // 리스트를 다 사용한 후에는 head를 NULL로 설정
  list->head = NULL;
}

int main() {
  // 연결 리스트 생성 및 초기화
  LinkedList myList;
  initializeList(&myList);

  // 노드 추가
  appendNode(&myList, 10);
  appendNode(&myList, 20);
  appendNode(&myList, 30);

  // 연결 리스트 출력
  printf("Linked List: ");
  printList(&myList);

  // 연결 리스트 메모리 해제
  freeList(&myList);

  return 0;
}
