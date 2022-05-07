function solution(queue1, queue2) {
    let answer = 0;
    queue1.map(BigInt);
    queue2.map(BigInt);
    let q1_sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let q2_sum = queue2.reduce((acc, cur) => acc + cur, 0);
    let leng = queue1.length + queue2.length;

    while (q1_sum !== q2_sum) {
        if (answer >= leng) {
            answer = -1;
            break;
        }

        if (q1_sum > q2_sum) {
            queue2.push(queue1[0]);
            q1_sum -= queue1[0];
            q2_sum += queue1[0];
            queue1 = queue1.splice(1, queue1.length - 1);
            answer += 1;
        } else {
            queue1.push(queue2[0]);
            q1_sum += queue2[0];
            q2_sum -= queue2[0];
            queue2 = queue2.splice(1, queue2.length - 1);
            answer += 1;
        }
    }

    return answer;
}

console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
