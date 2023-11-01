#include <stdio.h>
#include <stdlib.h>

/**
 *  
 * 
 * @return int 
 */
#define MAX_VERTICES 50
typedef struct GraphType
{
  int n;
  int mat[MAX_VERTICES][MAX_VERTICES];
} GraphType;

void init(GraphType* g){
  int r,c;
  g->n = 0;
  for(r=0; r<MAX_VERTICES; r++){
    for(c=0; c<MAX_VERTICES; c++){
      g->mat[r][c] = 0;
    }
  }
}

void insert_vertex(GraphType* g, int v){
  if((g->n) + 1 > MAX_VERTICES){
    fprintf(stderr, "그래프 정점의 개수 초과");
    return;
  }
  g->n++;
}

void insert_edge(GraphType* g, int start, int end){
  if(start >= g->n || end >= g->n){
    fprintf(stderr,"그래프 정점번호 오류");
    return;
  }
  g->mat[start][end] =1;
  g->mat[end][start] =1;
}

void print_mat(GraphType* g){
  for(int i =0; i<g->n; i++){
    for(int j =0; j<g->n; j++){
      printf("%2d", g->mat[i][j]);
    }
    printf("\n");
  }
}

int main(){
  GraphType *g;
  g= (GraphType *) malloc(sizeof(GraphType));
  init(g);
  for(int i=0; i<4; i++){
    insert_vertex(g,i);
  }
  insert_edge(g,0,1);
  insert_edge(g,0,2);
  insert_edge(g,0,3);
  insert_edge(g,1,2);
  insert_edge(g,2,3);
  print_mat(g);
  return 0;
}