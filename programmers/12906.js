// 같은 숫자는 싫어

function solution(arr)
{
    const stack = [];
    stack.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if(stack[stack.length-1] != arr[i]) stack.push(arr[i]);
    }
    return stack;
}

console.log(solution[1,1,3,3,0,1,1]);
