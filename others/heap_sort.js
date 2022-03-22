// const str =('7 5 6 8 3 5 9 1 6');
// const arr = str.split(' ').map(Number);

// const swap = (arr, i, j) =>{
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     return arr;
// }

// const heapify = (arr, lastIdx) =>{
//     let idx = parseInt(lastIdx/2)-1;
//     while(idx >= 0){
//         const left = idx*2+1;
//         const right = idx*2+2;

//         if(arr[left] >= arr[right] && arr[idx] < arr[left]){
//             arr = swap(arr,idx,left);
//         } else if(arr[left] < arr[right] && arr[idx] < arr[right]){
//             arr = swap(arr,idx,right);
//         }
//         idx--;
//     }
//     return arr;
// }
// const heapSort = (arr) =>{
//     for(let i=arr.length-1; i>=0; i--){
//         arr = heapify(arr,i);
//         if(arr[0] > arr[i]){
//             arr = swap(arr,i, 0);
//         }
//     }
//     return arr;
// }

// console.log(heapSort(arr));

// const heap_sort = (arr) =>{
//     // 전체 트리 구조를 최대 힙 구조로 변환
//     for(let i=1; i<arr.length; i++){
//         let c=i;
//         do{
//             // 노드의 부모 노드를 가리킴
//             let root = ((c-i)/2).toFixed(0);
//             if(arr[root] < arr[c]){ // 부모의 값보다 자식의 값이 크다면
//                 // 위치 바꿈
//                 let temp = arr[root];
//                 arr[root] = arr[c];
//                 arr[c] = temp;
//             }
//             // 자식의 부모로 이동
//             c = root;
//         }while(c!=0)
//     }

//     // 크기를 줄여가며 반복적으로 힙을 구성
//     for(let i=arr.length-1; i>=0; i--){
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//         let root = 0;
//         let c = 1;
//         do{
//             c = 2*root + 1;

//             // 자식 중에 더 큰 값을 찾기
//             if(c < i-1 && arr[c] < arr[c+1]) c++;

//             // 루트보다 자식이 크다면 교환
//             if(c<i && arr[root] < arr[c]){
//                 temp = arr[root];
//                 arr[root] = arr[c];
//                 arr[c] = temp;
//             }
//             root = c;
//         } while(c<i);
//     }

//     console.log(arr);

// }

// heap_sort(arr);

let arrLen;

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, i){
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if(left < arrLen && arr[left] > arr[max]){
    max = left;
  }
  
  if(right < arrLen && arr[right] > arr[max]){
    max = right;
  }
  
  if(max != i){
    swap(arr, i, max);
    heapify(arr, max);
  }
}

function heapSort(arr){
  arrLen = arr.length;

  for(let i = Math.floor(arrLen / 2); i >= 0; i--){
    heapify(arr, i);
  }
  
  for(let i = arrLen - 1; i > 0; i--){
    swap(arr, 0, i);
    arrLen--;
    
    heapify(arr, 0);
  }
  
  return arr;
}

console.log(heapSort([13, 1, 3, 7, 9, 11, 5]));