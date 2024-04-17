#define MAX_QUEUE_SIZE 100
typedef int element;

typedef struct {
  element data[MAX_QUEUE_SIZE];
  int front, rear;
} QueueType;

void init_queue(QueueType *q);

int is_empty(QueueType *q);

int is_full(QueueType *q);

void enqueue(QueueType *q, element ele);

element dequeue(QueueType *q);
