// 부등호

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);

const k = parseInt(input.shift());
const arr = input.shift().split(' ');
const sol = (k,arr) =>{
    const max = [];
    const min = [];
    let temp = [];
    let i = 0;
    let cursor = 0;
    while(arr.length){
        const sign = arr.shift();
        console.log(sign)
        let leftSignCount = 0;
        let rightSignCount = 0;
        if(sign === '>'){
            const count = rightSignCount + i +1;
            while(i<=count){ 
                max.push(9-i)
                i++; 
            }
        } else if( sign ==='<'){
            
        }
    }
    console.log(max);
}

sol(k,arr);
