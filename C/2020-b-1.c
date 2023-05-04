#include <stdio.h>
#include <string.h>

int main(){
  char data[3][20] = {"education", "computer", "algorithm"};
  int k, count;
  char *p;
  count = strlen(data[0]);
  p = (char *) data;
  // printf("%s",&data[1][0]);
  printf("%c",*(p+2));
  printf("\n");
  for ( k = 0; k < count; k++)
  {
    printf("%c", *(p+count - (k+1)));
  }
  return 0;
  
}