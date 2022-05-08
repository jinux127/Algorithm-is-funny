function solution(atmos) {
    var answer = 0;
    let day = 0;
    let isUse = false;
    atmos.map((item) => {
        /// 매우나쁨 상ㅐ
        if (item[0] >= 151 && item[1] >= 76) {
            // 사용중이라면
            if (isUse) {
                isUse = false;
                day = 0;
            } else {
                answer += 1;
            }
        } else if (item[0] >= 81 || item[1] >= 36) {
            if (!isUse) {
                answer += 1;
                isUse = true;
            }
        }
        if (isUse) {
            day += 1;
            if (day === 3) {
                isUse = false;
                day = 0;
            }
        }
    });

    return answer;
}

console.log(
    solution([
        [80, 35],
        [70, 38],
        [100, 41],
        [75, 30],
        [160, 80],
        [77, 29],
        [181, 68],
        [151, 76],
    ])
);
