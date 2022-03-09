// 덱

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const N = input.shift();

const sol = (N,input) =>{
    const deque = [];
    const result = [];
    while(input.length){
        const command = input.shift();
        if(command === 'push_front'){
            deque.unshift(input.shift());
        } else if (command === 'push_back'){
            deque.push(input.shift());
        } else if (command === 'pop_front'){
            if(deque.length) result.push(deque.shift());
            else result.push(-1);
        } else if (command === 'pop_back'){
            if(deque.length) result.push(deque.pop());
            else result.push(-1);
        } else if (command === 'size'){
            result.push(deque.length);
        } else if (command === 'empty'){
            if(deque.length) result.push(0);
            else result.push(1);
        } else if (command === 'front'){
            if(deque.length) result.push(deque[0]);
            else result.push(-1);
        } else if (command === 'back'){
            if(deque.length) result.push(deque[deque.length-1]);
            else result.push(-1);
        }
    }

    console.log(result.join('\n'));
}

sol(N,input);
