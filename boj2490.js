let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 제출용
let input = fs.readFileSync('input.txt').toString().trim().split('\n'); // vscode 테스트용

// 윷놀이
let inputArr = input.map(i=>i.split(' ')); 
inputArr.map(i=>{
    let ttt = i.filter(i=>i == 1).length;
    if(ttt == 0){
        console.log("D");
    } else if(ttt == 1){
        console.log("C");
    } else if(ttt == 2){
        console.log("B");
    } else if(ttt == 3){
        console.log("A");
    } else if(ttt == 4){
        console.log("E");
    }
})

