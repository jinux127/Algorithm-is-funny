// 행렬의 덧셈

function solution(arr1, arr2) {
    return arr1.map((cur,i) => 
        arr2[i].map((cur2,j) => 
            arr1[i][j]+arr2[i][j]
        )
    );
}

console.log(solution([[1,2],[2,3]]))