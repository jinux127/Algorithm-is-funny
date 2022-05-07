function solution(alp, cop, problems) {
    let answer = Infinity;
    const alp_sort_problems = problems.sort((a, b) => a[0] - b[0]);
    const cop_sort_problems = problems.sort((a, b) => a[1] - b[1]);

    // 목표 알고력, 코딩력
    let target_alp = alp_sort_problems[0][alp_sort_problems.length - 1];
    let target_cop = cop_sort_problems[0][cop_sort_problems.length - 1];

    const dfs = (alp, cop, cnt) => {
        if (alp >= target_alp && cop >= target_cop) {
            answer = Math.min(answer, cnt);
            return;
        }

        const possible_sorve_problems = problems.filter(
            (item) => item[0] <= alp && item[1] <= cop
        );

        if (!possible_sorve_problems.length) {
            dfs(alp + 1, cop, cnt + 1);
            dfs(alp, cop + 1, cnt + 1);
        }
    };
    dfs(alp, cop, 0);
    return answer;
}

console.log(
    solution(0, 0, [
        [0, 0, 2, 1, 2],
        [0, 0, 2, 1, 3],
        [0, 0, 2, 1, 4],
        [4, 11, 4, 0, 2],
        [10, 4, 0, 4, 2],
    ])
);
