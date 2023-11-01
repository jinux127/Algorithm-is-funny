#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <stdbool.h>
/**
 *  
 * 
 * @return int 
 */
#define MAX_VERTICES 100
typedef struct GraphType
{
  int n;
  int weight[MAX_VERTICES][MAX_VERTICES];
} GraphType;

int distance[MAX_VERTICES];
int found[MAX_VERTICES];

int choose(int distance[], int n, int found[]){
  int i, min, minpos;
  min = INT_MAX;
  minpos = -1;
  for(i = 0; i<n; i++){
    if(distance[i]< min && !found[i]){
      min = distance[i];
      minpos= i;
    }
  }
  return minpos;
}

void print_status(GraphType* g){
  static int step =1;
  printf("STEP %d =", step++);
  printf("distance: ");
  for(int i =0; i<g->n;i++){
    if(distance[i]== INT_MAX)printf(" * ");
    else printf("%2d ", distance[i]);
  }
  printf("\n");
  printf(" found: ");
  
  for(int i= 0; i<g->n; i++){
    printf("%2d ", found[i]);
  
  }
  printf("\n");
}

void shortest_path(GraphType* g, int start){
  int i,u,w;
  for(i =0; i<g->n; i++){
    distance[i] = g->weight[start][i];
    found[i] = false;
  }
  found[start] = true;
  distance[start]= 0;
  for(i=0; i<g->n-1; i++){
    print_status(g);
    u =choose(distance, g->n, found);
    found[u]= true;
    for(w=0; w<g->n;w++){
      
      if(!found[w]&& g->weight[u][w] != INT_MAX && distance[u] + g->weight[u][w]<distance[w]){
        distance[w] = distance[u] + g->weight[u][w];
      }
    }
  }
}



int main(){
  GraphType g = {7,
    {
      {0,7,INT_MAX,INT_MAX,3,10,INT_MAX},
      {7,0,4,10,10,6,INT_MAX},
      {INT_MAX,4,0,2,INT_MAX,INT_MAX,INT_MAX},
      {INT_MAX,10,2,0,11,9,4},
      {3,2,INT_MAX,11,0,INT_MAX,5},
      {10,6,INT_MAX,9,INT_MAX,0,INT_MAX},
      {INT_MAX,INT_MAX,INT_MAX,4,5,INT_MAX,0}
    }
  };
  shortest_path(&g, 0);
  return 0;
}