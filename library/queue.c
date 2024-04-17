#include "queue.h"
#include <stdio.h>
#include <stdlib.h>

void init_queue(QueueType *q) { q->front = q->rear = 0; }

int is_empty(QueueType *q) { return (q->front == q->rear); }

int is_full(QueueType *q) {
  return ((q->rear + 1) % MAX_QUEUE_SIZE == q->front);
}

void enqueue(QueueType *q, element ele) {
  if (is_full(q)) {
    printf("에러: 큐가 포화상태입니다.");
  }
  q->rear = (q->rear + 1) % MAX_QUEUE_SIZE;
  q->data[q->rear] = ele;
}

element dequeue(QueueType *q) {
  if (is_empty(q)) {
    printf("에러: 큐가 공백상태입니다.");
  }
  q->front = (q->front + 1) % MAX_QUEUE_SIZE;
  return q->data[q->front];
}
