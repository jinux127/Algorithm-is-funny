//실패율
// N	stages	                    result
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]

function solution(N, stages) {
    var answer = [];
    let arr = [];
    for (let i = 1; i <= N; i++) {
        let dodal = stages.filter(x=>x>=i).length;
        let not_clear = stages.filter(x=>x==i).length;
        arr[i] = {
            "p":not_clear/dodal,
            "no":i
        };
    }
    arr.sort((a,b)=>b.p-a.p)[1]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined) answer[i] = arr[i].no;
    }
    return answer;
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3]);