const str =('7 5 6 8 3 5 9 1 6');
const arr = str.split(' ').map(Number);

const swap = (arr, i, j) =>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

const heapify = (arr, lastIdx) =>{
    let last = parseInt(lastIdx/2)-1;
    while(last >= 0){
        const left = last*2+1;
        const right = last*2+2;

        if(arr[left] >= arr[right] && arr[last] < arr[left]){
            arr = swap(arr,last,left);
        } else if(arr[left] < arr[right] && arr[last] < arr[right]){
            arr = swap(arr,last,right);
        }
        last--;
    }
    return arr;
}
const heapSort = (arr) =>{
    for(let i=arr.length-1; i>=0; i--){
        arr = heapify(arr,i);
        if(arr[0] > arr[i]){
            arr = swap(arr,i, 0);
        }
    }
    return arr;
}

console.log(heapSort(arr));

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