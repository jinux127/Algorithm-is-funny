#include <stdio.h>
#include <stdlib.h>

// 스레드 이진 트리의 노드 구조체 정의
struct ThreadedNode {
  int data;
  struct ThreadedNode *left;
  struct ThreadedNode *right;
  int isThreaded;            // 1 if right is a thread, 0 if it's a regular link
  struct ThreadedNode *next; // 다음 노드를 가리키는 스레드
};

// 스레드 이진 트리 생성 함수
struct ThreadedNode *createThreadedNode(int data) {
  struct ThreadedNode *newNode =
      (struct ThreadedNode *)malloc(sizeof(struct ThreadedNode));
  newNode->data = data;
  newNode->left = NULL;
  newNode->right = NULL;
  newNode->isThreaded = 0;
  newNode->next = NULL;
  return newNode;
}

// 중위 순회로 스레드를 설정하는 함수
void createThreadedInOrder(struct ThreadedNode *root,
                           struct ThreadedNode **prev) {
  if (root == NULL)
    return;

  // 왼쪽 서브트리 순회
  createThreadedInOrder(root->left, prev);

  // 현재 노드의 다음 노드 설정 (스레드 또는 다음 노드)
  if (*prev != NULL) {
    (*prev)->next = root;
    (*prev)->isThreaded = 1; // 현재 노드의 다음은 스레드로 설정
  }

  // 현재 노드를 이전 노드로 설정
  *prev = root;

  // 오른쪽 서브트리 순회
  createThreadedInOrder(root->right, prev);
}

// 중위 순회로 스레드를 이용하여 출력하는 함수
void threadedInOrderTraversal(struct ThreadedNode *root) {
  struct ThreadedNode *current = root;

  // 가장 왼쪽 노드로 이동
  while (current != NULL && current->left != NULL)
    current = current->left;

  // 중위 순회로 출력
  while (current != NULL) {
    printf("%d ", current->data);

    // 만약 다음 노드가 스레드라면 바로 이동
    if (current->isThreaded)
      current = current->next;
    else { // 그렇지 않다면 오른쪽 서브트리로 이동 후 가장 왼쪽 노드로 이동
      current = current->right;
      while (current != NULL && current->left != NULL)
        current = current->left;
    }
  }
}

// 메모리 해제 함수
void freeThreadedTree(struct ThreadedNode *root) {
  if (root != NULL) {
    freeThreadedTree(root->left);
    freeThreadedTree(root->right);
    free(root);
  }
}

int main() {
  // 스레드 이진 트리 생성
  struct ThreadedNode *root = createThreadedNode(4);
  root->left = createThreadedNode(2);
  root->right = createThreadedNode(6);
  root->left->left = createThreadedNode(1);
  root->left->right = createThreadedNode(3);
  root->right->left = createThreadedNode(5);
  root->right->right = createThreadedNode(7);

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
