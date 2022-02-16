// 타겟 넘버

// 입출력 예
// numbers	target	return
// [1, 1, 1, 1, 1]	3	5
// [4, 1, 2, 1]	4	2

function solution(numbers, target) {
    var answer = 0;

    dfs(0,0);
    function dfs(level, sum){
        if(level === numbers.length){
            if(sum === target){
                answer ++;
            }
            return;
        }
        dfs(level+1,sum + numbers[level]);
        dfs(level+1,sum - numbers[level]);
    }
    console.log(answer);
    return answer;
}

solution([1,1,1,1,1],3);