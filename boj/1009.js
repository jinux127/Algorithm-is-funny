// 분산처리

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const T = parseInt(input.shift());
const testCase = input;
const sol = (T,testCase) =>{
    const result = testCase.map(v => {
        const [a, b] = v.split(' ');  
          
        let pow = 1;
        
        for (let j = 0; j < b; j++) {
          pow = (pow * a) % 10;
        }
          
        return pow === 0 ? 10 : pow;
      });  
      
    console.log(result.join("\n"));

}

sol(T,testCase);
