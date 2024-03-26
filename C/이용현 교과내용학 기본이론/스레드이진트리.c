#include <stdio.h>
#include <stdlib.h>

// 스레드 이진 트리의 노드 구조체 정의
struct ThreadedNode {
  int data;
  struct ThreadedNode *leftChild; // 노드의 왼쪽 부분이 어느 노드를 가리키는지
  struct ThreadedNode
      *rightChild; // 노드의 오른쪽 부분이 어느 노드를 가리키는지
  int leftThread; // 왼쪽에 스레드가 형성되어 있는지 여부 (1: 스레드, 0: 링크)
  int rightThread; // 오른쪽에 스레드가 형성되어 있는지 여부 (1: 스레드, 0:
                   // 링크)
};

// 스레드 이진 트리 생성 함수
struct ThreadedNode *createThreadedNode(int data) {
  struct ThreadedNode *newNode =
      (struct ThreadedNode *)malloc(sizeof(struct ThreadedNode));
  newNode->data = data;
  newNode->leftChild = NULL;
  newNode->rightChild = NULL;
  newNode->leftThread = 0;  // 초기값: 링크
  newNode->rightThread = 0; // 초기값: 링크
  return newNode;
}

// 중위 순회로 스레드를 설정하는 함수
void createThreadedInOrder(struct ThreadedNode *root,
                           struct ThreadedNode **prev) {
  if (root == NULL)
    return;

  // 왼쪽 서브트리 순회
  createThreadedInOrder(root->leftChild, prev);

  // 현재 노드의 다음 노드 설정 (스레드 또는 다음 노드)
  if (*prev != NULL) {
    if ((*prev)->rightChild ==
        NULL) { // 이전 노드의 오른쪽 자식이 없다면 현재 노드와 스레드로 연결
      (*prev)->rightChild = root;
      (*prev)->rightThread = 1; // 현재 노드의 다음은 스레드로 설정
    }
  }

  // 현재 노드를 이전 노드로 설정
  *prev = root;

  // 오른쪽 서브트리 순회
  createThreadedInOrder(root->rightChild, prev);
}

// 중위 순회로 스레드를 이용하여 출력하는 함수
void threadedInOrderTraversal(struct ThreadedNode *root) {
  struct ThreadedNode *current = root;

  // 가장 왼쪽 노드로 이동
  while (current != NULL && current->leftThread == 0) {
    if (current->leftChild != NULL) { // 왼쪽 자식이 있는 경우에만 이동
      current = current->leftChild;
    } else {
      break; // 왼쪽 자식이 없으면 루프 종료
    }
  }
  // 중위 순회로 출력
  while (current != NULL) {
    printf("%d ", current->data);

    // 만약 다음 노드가 스레드라면 바로 이동
    if (current->rightThread)
      current = current->rightChild;
    else { // 그렇지 않다면 오른쪽 서브트리로 이동 후 가장 왼쪽 노드로 이동
      current = current->rightChild;
      while (current != NULL && current->leftThread == 0)
        if (current->leftChild != NULL) { // 왼쪽 자식이 있는 경우에만 이동
          current = current->leftChild;
        } else {
          break; // 왼쪽 자식이 없으면 루프 종료
        }
    }
  }
}

// 메모리 해제 함수
void freeThreadedTree(struct ThreadedNode *root) {
  if (root != NULL) {
    freeThreadedTree(root->leftChild);
    freeThreadedTree(root->rightChild);
    free(root);
  }
}

int main() {
  // 스레드 이진 트리 생성
  struct ThreadedNode *root = createThreadedNode(4);
  root->leftChild = createThreadedNode(2);
  root->rightChild = createThreadedNode(6);
  root->leftChild->leftChild = createThreadedNode(1);
  root->leftChild->rightChild = createThreadedNode(3);
  root->rightChild->leftChild = createThreadedNode(5);
  root->rightChild->rightChild = createThreadedNode(7);

  // 중위 순회로 스레드 설정
  struct ThreadedNode *prev = NULL;
  createThreadedInOrder(root, &prev);

  // 중위 순회로 출력
  printf("In-order traversal using threads: ");
  threadedInOrderTraversal(root);
  printf("\n");

  // 메모리 해제
  freeThreadedTree(root);

  return 0;
}
