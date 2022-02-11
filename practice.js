// forEach 학습
const testArray = ['a','b','c','d','e','f','g'];

function forEach_practice(arr){
    arr.forEach((element,index,arr)=>{
        console.log("element:"+element+" index:"+index +" arr:"+arr);
    });
}

// forEach_practice(testArray);

// 조합
// 조합은 순서가 상관없다
// 수도코드
// 시작
//   1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
//   [1, 2, 3] [1, 2, 4] [1, 3, 4]
//   2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
//   [2, 3, 4]
//   3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 
//   [] 
//   4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
//   []
// 종료

function getCombination(arr, selectNumber){
    const result = [];

    if(selectNumber ===1) return arr.map(el => [el]);

    arr.forEach((fixed,index,arr)=>{
        const rest = arr.slice(index+1); // 첫번째 arr 요소 제외 나머지 담음
        const combinations = getCombination(rest,selectNumber-1); // 나머지, (한가지 요소를 제외했으니 -1) 재귀호출
        const attached = combinations.map(el => [fixed, ...el]);
        result.push(...attached);
    });
    console.log(result);
    return result;
}

// getCombination([1,2,3,4],3);

function solution2(n, lost, reserve) {
    const answer = new Array(n);
    
    answer.fill(1);
    
    reserve.map(r =>{answer[r-1]+=1});
    lost.map(l => answer[l-1] -=1);


    answer.map((a,i)=>{
        if(a===0){
            if(answer[i-1] === 2){
                answer[i-1] -= 1;
                answer[i] += 1;
            } else if(answer[i+1] === 2){
                answer[i+1] -= 1;
                answer[i] += 1;
            }
        }
    })    
    console.log(answer);

    return answer;
}

// solution2(	5, [2, 4], [1, 3, 5]);

function solution3(n, lost, reserve) {
    const answer = new Array(n);
   
    return answer;
}


// 1이 될때까지
function solution4(n,k){
    let target = 0;
    let result = 0;
    while(true){
        target = (n / k) *k;
        result += (n - target);
        n = target;

        if(n<k) break;

        result += 1;
        n /=k
    }

    result += (n-1)
    return(result);
}

solution4(24,6);