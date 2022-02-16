// 짝지어 제거하기

// 1차 답안
function solution(s)
{
    if(s.length % 2 != 0) return 0;

    let arr = s.split('');
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] == s[i+1]){
            s = s.split(s[i] + s[i]).join('');
            i = -1;
        }

    }
    console.log(s.length)
    return s.length == 0 ? 1 : 0;
}

// 2차 답안
function solution2(s)
{
    const stack = [];
    for(let i =0; i< s.length; i++){
        if(!stack.length || stack[stack.length-1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }
    console.log(stack)
    return stack.length ? 0 : 1;
}

solution2('baabaa');