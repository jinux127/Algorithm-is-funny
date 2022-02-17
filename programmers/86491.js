// 최소직사각형

function solution(sizes) {
    let max_w = 0;
    let max_h = 0;
    sizes.map(i=>{
        i.sort((a,b) => b-a);
        max_w = Math.max(max_w,i[0]);
        max_h = Math.max(max_h,i[1]);
         
    });
    return max_w*max_h;
}

console.log(solution([[14, 1], [19, 1], [6, 1], [18, 1], [7, 9]]));