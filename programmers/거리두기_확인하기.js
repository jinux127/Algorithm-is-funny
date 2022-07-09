// 거리두기 확인하기
const places = [
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

function solution(places) {
    var answer = [];
    answer = places.map((place) => {
        return place.some((row, rowIndex) =>
            row.split('').some((mark, colIndex, rowArr) => {
                if (mark === 'X') return false;
                const countPeopleAround = [
                    rowArr[colIndex - 1] || '',
                    rowArr[colIndex + 1] || '',
                    (place[rowIndex - 1] || '')[colIndex],
                    (place[rowIndex + 1] || '')[colIndex],
                ].filter((mark) => mark === 'P').length;
                return (
                    (mark === 'P' && countPeopleAround > 0) ||
                    (mark === 'O' && countPeopleAround > 1)
                );
            })
        )
            ? 0
            : 1;
    });
    console.log(answer);
    return answer;
}

solution(places);
