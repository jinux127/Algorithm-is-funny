// 셀프 넘버


function solution(){
    let arr = new Array(10001).fill(true);

    function selfNumber(n){
        let result = n;
        n = String(n);

        for (let i = 0; i < n.length; i++) {
            result += Number(n[i]);
        }
        return result;
    }

    for(let i=0; i<= 10000; i++){
        arr[selfNumber(i)] = false;
    }

    for (let i = 0; i <= 10000; i++) {
        if(arr[i]) console.log(i);
    }

}

solution()