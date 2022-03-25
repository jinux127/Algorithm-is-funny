// 스타트와 링크

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(/\n/);
const N = parseInt(input.shift());
const arr = input;
const sol = (N, arr) =>{
    const table = [];
    const visited = new Array(N).fill(false);

    for(let i=0; i<N;i++){
        table[i] = arr[i].split(' ').map(Number);
    }
    const ability = (team) =>{
        let sum = 0;
        for(let i=0; i<team.length-1; i++){
            for(let j=i+1; j<team.length; j++){
                sum += table[team[i]][team[j]];
                sum += table[team[j]][team[i]];
            }
        }
        return sum;
    }
    const total_team_difference = [];
    const dfs = (idx,cnt) =>{
        if(cnt === N/2){
            let teamA = [];
            let teamB = [];
            for(let i=0; i<N; i++){
                if(visited[i]) teamA.push(i);
                else teamB.push(i);
            }
            const teamA_ability = ability(teamA);
            const teamB_ability = ability(teamB);
            const team_difference = Math.abs(teamA_ability-teamB_ability);
            total_team_difference.push(team_difference);
            return ;
            // console.log(`teamA: ${teamA}`)
            // console.log(`teamB: ${teamB}`)
        }

        for(let i=idx; i<N; i++){
            if(visited[i]) continue;
            visited[i] = true;
            dfs(i, cnt + 1);
            visited[i] = false;
        }
    }
    dfs(0,0);

    console.log(Math.min(...total_team_difference));
}

sol(N, arr);
