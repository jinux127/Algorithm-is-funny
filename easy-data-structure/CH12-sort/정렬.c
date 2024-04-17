#include "../../library/queue.h"
#include <stdio.h>
#include <stdlib.h>
#define MAX_SIZE 10

/*
  ** 검색해서 코드 확인 및 사용할 것
  ** 주석 [] 배열요소는 기출 년도를 나타냄 ex) 퀵 정렬 [21-a]

  실행 터미널 명령어
    gcc 정렬.c ../../library/queue.c && ./a.out

  # 목차
  1. 선택 정렬
  2. 삽입 정렬
  3. 버블 정렬
  4. 쉘  정렬
  5. 합병 정렬
  6. 퀵  정렬
  7. 기수 정렬
*/

void swap(int list[], int x, int y) {
  int temp;
  temp = list[x];
  list[x] = list[y];
  list[y] = temp;
}

/**
 * @brief 단순 정렬과정 출력 함수
 *
 * @param list 출력할 배열
 * @param i 몇 번째
 * @param n 배열 길이
 */
void printSorting(int list[], int i, int n) {
  printf("%d 번째 정렬: ", i);

  for (int i = 0; i < n; i++) {
    printf("%d ", list[i]);
  }
  printf("\n");
}

void printBeforeSort(int list[], int n) {
  printf("\n");
  printf("정렬전: ");
  for (int i = 0; i < n; i++) {
    printf("%d ", list[i]);
  }
  printf("\n");
  printf("\n");
}

void printAfterSort(int list[], int n) {
  printf("\n");
  printf("정렬후: ");
  for (int i = 0; i < n; i++) {
    printf("%d ", list[i]);
  }
  printf("\n");
  printf("\n");
}

void processSorting(void (*pf)(int list[], int n), int list[], int n) {
  printBeforeSort(list, n);
  (*pf)(list, n);
  printAfterSort(list, n);
}
// 선택정렬
void selection_sort(int list[], int n) {
  int least, temp;
  for (int i = 0; i < n - 1; i++) {
    least = i;
    for (int j = i + 1; j < n; j++) {
      if (list[j] < list[least])
        least = j;
    }
    swap(list, i, least);
    printSorting(list, i, n);
  }
}

// 삽입정렬
void insertion_sort(int list[], int n) {
  int key, j;
  for (int i = 1; i < n; i++) {
    key = list[i];
    for (j = i - 1; j >= 0 && list[j] > key; j--) {
      list[j + 1] = list[j];
    }
    list[j + 1] = key;

    printSorting(list, i, n);
  }
}

// 버블정렬
void bubble_sort(int list[], int n) {
  int version = 2;

  if (version == 1) {
    // 정렬 시 뒤부터 정렬된다. 따라서 뒤의 정렬된 리스트의 기준을 제시한다.
    for (int i = n - 1; i > 0; i--) {
      // 앞에서부터 정렬
      for (int j = 0; j < i; j++) {
        // 앞이 크다면
        if (list[j] > list[j + 1]) {
          // 바로 뒤에 값과 바꾼다.
          swap(list, j, j + 1);
        }
      }
      printSorting(list, n - i, n);
    }
  } else if (version == 2) {
    // 정렬 된 값 앞부터 나열
    for (int i = 0; i < n; i++) {
      // 뒤에서부터 정렬
      for (int j = n - 1; j > i; j--) {
        // 오름차순 정렬
        if (list[j - 1] > list[j]) {
          swap(list, j - 1, j);
        }
      }
      printSorting(list, i + 1, n);
    }
  }
}

void inc_insertion_sort(int list[], int first, int last, int gap) {
  int key, i, j;
  for (i = first + gap; i <= last; i += gap) {
    key = list[i];
    for (j = i - gap; j >= first && key < list[j]; j -= gap) {
      list[j + gap] = list[j];
    }
    list[j + gap] = key;
  }
}
// 쉘정렬
void shell_sort(int list[], int n) {
  for (int gap = n / 2; gap > 0; gap = gap / 2) {
    if (gap % 2 == 0)
      gap++;
    for (int i = 0; i < gap; i++) {
      inc_insertion_sort(list, i, n - 1, gap);
    }
  }
}

/**
 * @brief 합병정렬 합치는 함수
 *
 * @param list 정렬 타겟 배열
 * @param left 배열의 처음 요소 인덱스
 * @param mid 배열의 중간 요소 인덱스
 * @param right 배열의 마지막 요소 인덱스
 */
void merge(int list[], int left, int mid, int right) {
  int sorted[MAX_SIZE];
  int leftIdx, rightIdx, sortedArrIndex;

  leftIdx = left;
  rightIdx = mid + 1;
  sortedArrIndex = left;

  while (leftIdx <= mid && rightIdx <= right) {
    if (list[leftIdx] <= list[rightIdx]) {
      sorted[sortedArrIndex++] = list[leftIdx++];
    } else {
      sorted[sortedArrIndex++] = list[rightIdx++];
    }
  }
  // 왼쪽 값을 다 옮겼다면
  if (leftIdx > mid) {
    for (int i = rightIdx; i <= right; i++) {
      sorted[sortedArrIndex++] = list[i];
    }
  } else {
    for (int i = leftIdx; i <= mid; i++) {
      sorted[sortedArrIndex++] = list[i];
    }
  }

  for (int i = left; i <= right; i++) {
    list[i] = sorted[i];
  }
}

/**
 * @brief 합병 정렬
 *
 * @param list
 * @param left 배열 처음 값 인덱스
 * @param right 배여려 마지막 값 "인덱스"
 */
void merge_sort(int list[], int left, int right) {
  int mid;
  if (left < right) {
    mid = (left + right) / 2;
    merge_sort(list, left, mid);
    merge_sort(list, mid + 1, right);
    merge(list, left, mid, right);
  }
}

int partition(int list[], int left, int right) {
  int pivot, temp;
  int low, high;

  low = left;
  high = right + 1;
  pivot = list[left];
  do {
    do {
      low++;
    } while (list[low] < pivot);
    do {
      high--;
    } while (list[high] > pivot);
    if (low < high)
      swap(list, low, high);
  } while (low < high);

  swap(list, left, high);
  return high;
}

/**
 * @brief 퀵 정렬 [21-a]
 *
 * @param list
 * @param left 왼쪽 인덱스
 * @param right 오른쪽 인덱스
 */
void quick_sort(int list[], int left, int right) {
  if (left < right) {

    int q = partition(list, left, right);
    /*
      21 a 기출
      1. pritnSorting의 1번째 2번재 출력을 작성
      2. 끝까지 실행 시 printf()의 q를 순서대로 작성
    */
    printSorting(list, 0, 10);
    printf("q: %d\n", q);
    quick_sort(list, left, q - 1);
    quick_sort(list, q + 1, right);
  }
}

/**
 * @brief 기수정렬
 *
 * @param list
 * @param n
 */
void radix_sort(int list[], int n) {
  int BUCKETS = 10;
  int DIGITS = 4;
  int factor = 1;
  int j;

  QueueType queue[BUCKETS];

  for (int i = 0; i < BUCKETS; i++)
    init_queue(&queue[i]);

  for (int i = 0; i < DIGITS; i++) {
    for (j = 0; j < n; j++) {
      // printf("%d ", (list[j] / factor) % 10);
      enqueue(&queue[(list[j] / factor) % 10], list[j]);
    }
    for (int k = j = 0; k < BUCKETS; k++) {
      while (!is_empty(&queue[k])) {
        list[j++] = dequeue(&queue[k]);
      }
    }
    factor *= 10;
  }
}

int main() {
  int i;
  int n = MAX_SIZE;
  int list[MAX_SIZE];
  int list2[MAX_SIZE];
  int list3[MAX_SIZE];
  int list4[MAX_SIZE];
  int list5[MAX_SIZE];
  int list6[MAX_SIZE];
  int list7[MAX_SIZE];

  for (i = 0; i < n; i++) {
    list[i] = arc4random() % 100;
    list2[i] = list[i];
    list3[i] = list[i];
    list4[i] = list[i];
    list5[i] = list[i];
    list6[i] = list[i];
    list7[i] = list[i];
  }

  printf("선택정렬\n");
  processSorting(selection_sort, list, n);

  printf("삽입정렬\n");
  processSorting(insertion_sort, list2, n);

  printf("버블정렬\n");
  processSorting(bubble_sort, list3, n);

  printf("쉘정렬\n");
  processSorting(shell_sort, list4, n);

  printf("합병정렬\n");
  printBeforeSort(list5, n);
  merge_sort(list5, 0, n - 1);
  printAfterSort(list5, n);

  printf("퀵 정렬\n");
  printBeforeSort(list6, n);
  quick_sort(list6, 0, n - 1);
  printAfterSort(list6, n);

  printf("기수정렬\n");
  processSorting(radix_sort, list7, n);

  return 0;
}
