#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int data;
  struct node *link;
} Node;

int main(void) {
  Node *node1, *node2, *node3;

  // 동적 메모리 할당을 통해 노드 생성
  node1 = (Node *)malloc(sizeof(Node));
  node2 = (Node *)malloc(sizeof(Node));
  node3 = (Node *)malloc(sizeof(Node));

  // 노드 데이터 설정
  node1->data = 10;
  node2->data = 20;
  node3->data = 30;

  // 노드 간의 연결
  node1->link = node2;
  node2->link = node3;
  node3->link = NULL;

  // 연결된 노드 순회
  Node *current = node1;
  while (current != NULL) {
    printf("%d\n", current->data);
    current = current->link;
  }

  // 동적으로 할당한 메모리 해제
  free(node1);
  free(node2);
  free(node3);

  return 0;
}