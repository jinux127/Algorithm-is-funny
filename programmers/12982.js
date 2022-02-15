// 예산
// d    	    budget     	result
// [1,3,2,5,4]	9	        3
// [2,2,3,3]	10	        4
function solution(d, budget) {
    let cnt = 0;
    d.sort((a,b)=>a-b).reduce((acc,cur)=>{
        if(budget >= (acc + cur)){
            acc += cur;
            cnt++;
        } 
        return acc;
    },0);;
    return cnt;
}

console.log(solution([1,3,2,5,4],9));