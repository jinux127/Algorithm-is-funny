// 다리를 지나는 트럭
// 1초에 길이 1 지남
// 올라가는 순서 정해져있다
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    let bridge = new Array(bridge_length).fill(0);

    while (bridge.length) {
        bridge.shift();
        answer ++;

        if (truck_weights.length) {
            let sum =bridge.reduce((acc,cur)=>acc + cur);
            
            if(sum + truck_weights[0] <= weight){
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0);
            }
        }
    }

    return answer;
}

console.log(solution(100,100,[10]))