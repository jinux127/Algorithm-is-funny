function solution(survey, choices) {
    var answer = '';
    const obj = {
        1: [3, 0],
        2: [2, 0],
        3: [1, 0],
        4: [0, 0],
        5: [1, 1],
        6: [2, 1],
        7: [3, 1],
    };
    const mbti = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };

    const choice_number = choices.map((choice) => {
        return obj[choice];
    });

    survey.map((surveyItem, i) => {
        mbti[surveyItem[choice_number[i][1]]] += choice_number[i][0];
    });

    mbti['R'] >= mbti['T'] ? (answer += 'R') : (answer += 'T');
    mbti['C'] >= mbti['F'] ? (answer += 'C') : (answer += 'F');
    mbti['J'] >= mbti['M'] ? (answer += 'J') : (answer += 'M');
    mbti['A'] >= mbti['N'] ? (answer += 'A') : (answer += 'N');

    return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
