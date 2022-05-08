// 전체 사무실의 지정된 자리 하나 이상 사용
// 빈자리는 없음
// 한 사무실에 지정된 자리 하나만 사용
// 해당방 자리 있는 사람 제외
// 지정자리 제일 적은사람 우선순위 높음
// 개수 동일 -> 가지고 있는 지정자리가 가까운사람 우선순위 높음 // 두 호수의 절대값 차이로 구함
// 거리도 같을 시 사전순으로 높은 순, 이 때 알파벳 대문자가 소문자보다 높음

function solution(rooms, target) {
    var answer = [];
    const office = {};
    const person = {};
    rooms.map((item) => {
        let arr = item.split(/[\[\]]/);
        let arr2 = arr[2].split(',').sort((a, b) => a.localeCompare(b));
        office[Math.abs(Number(arr[1]) - target)] = arr2;
    });
    console.log(office);
    const sortArr = Object.keys(office)
        .map(Number)
        .sort((a, b) => a - b);

    console.log(sortArr);

    for (let room in office) {
        let arr = office[room];
        arr.map((item) => {
            person[item] ? (person[item] += 1) : (person[item] = 1);
        });
    }
    console.log(person);
    const arrt = Object.keys(
        Object.fromEntries(Object.values(person).map((v) => [v, 0]))
    );

    const sortArrt = arrt.map(Number).sort((a, b) => a - b);

    for (const aa of sortArrt) {
        for (const distance of sortArr) {
            if (distance !== 0) {
                let arr = office[distance];
                arr.map((item) => {
                    if (
                        office[0].indexOf(item) === -1 &&
                        answer.indexOf(item) === -1
                    )
                        answer.push(item);
                });
            }
        }
    }

    console.log(answer);

    // a.localeCompare(b)

    // let minAbs = 0;

    // if (sortArr[0] === 0) minAbs = sortArr[1];
    // else minAbs = sortArr[0];

    // let countRoomArr = Object.values(person);
    // let min = Math.min(...countRoomArr);

    // const minPeopleArr = [];
    // for (const name in person) {
    //     if (person[name] === min) {
    //         minPeopleArr.push(name);
    //     }
    // }

    // const arr = minPeopleArr.filter((item) => office['0'].indexOf(item) === -1);

    return answer;
}
solution(['[403]James', '[404]Azad,Louis,Andy', '[101]Azad,Guard'], 403);
