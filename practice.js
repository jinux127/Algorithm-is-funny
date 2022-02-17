// forEach 학습
const testArray = ['a','b','c','d','e','f','g'];

function forEach_practice(arr){
    arr.forEach((element,index,arr)=>{
        console.log("element:"+element+" index:"+index +" arr:"+arr);
    });
}

// forEach_practice(testArray);

// 조합
// 조합은 순서가 상관없다
// 수도코드
// 시작
//   1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
//   [1, 2, 3] [1, 2, 4] [1, 3, 4]
//   2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
//   [2, 3, 4]
//   3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 
//   [] 
//   4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
//   []
// 종료

function getCombination(arr, selectNumber){
    const result = [];

    if(selectNumber ===1) return arr.map(el => [el]);

    arr.forEach((fixed,index,arr)=>{
        const rest = arr.slice(index+1); // 첫번째 arr 요소 제외 나머지 담음
        const combinations = getCombination(rest,selectNumber-1); // 나머지, (한가지 요소를 제외했으니 -1) 재귀호출
        const attached = combinations.map(el => [fixed, ...el]);
        result.push(...attached);
    });
    console.log(result);
    return result;
}

// getCombination([1,2,3,4],3);

function solution2(n, lost, reserve) {
    const answer = new Array(n);
    
    answer.fill(1);
    
    reserve.map(r =>{answer[r-1]+=1});
    lost.map(l => answer[l-1] -=1);


    answer.map((a,i)=>{
        if(a===0){
            if(answer[i-1] === 2){
                answer[i-1] -= 1;
                answer[i] += 1;
            } else if(answer[i+1] === 2){
                answer[i+1] -= 1;
                answer[i] += 1;
            }
        }
    })    
    console.log(answer);

    return answer;
}

// solution2(	5, [2, 4], [1, 3, 5]);

function solution3(n, lost, reserve) {
    const answer = new Array(n);
   
    return answer;
}


// 1이 될때까지
function solution4(n,k){
    let target = 0;
    let result = 0;
    while(true){
        target = (n / k) *k;
        result += (n - target);
        n = target;

        if(n<k) break;

        result += 1;
        n /=k
    }

    result += (n-1)
    console.log(result);
    return(result);
}

// solution4(24,6);

// 곱하기 혹은 더하기
function solution5(n){
    let arr = n.split('').map(i => parseInt(i,10)); //문자열을 배열에 삽입
    let result = 0;
    for(var i = 0; i<arr.length;i++){
        console.log(`arr: ${arr[i]}`);
        console.log(`result: ${result}`);
        if(arr[i] <= 1 || result <= 1){
            result += arr[i];
        } else {
            result *= arr[i];
        }
    }
    console.log(result);
}

// solution5('01984');

// 모험가 길드
function solution6(n,x){
    let tttt = x.split(' ').map(Number).sort();
    let result = 0;
    let count = 0;
    for(let i of tttt){
        count += 1;
        if(count >= i){
            result += 1;
            count = 0;
        }
    }
    console.log(result);
}

// solution6(5,'1 2 2 2 2');

// 상하좌우
function solution7(N,plans){
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    let move_types = ['L', 'R', 'U', 'D'];

    let plan = plans.split(' ');
    let x = 1, y = 1;
    for (const iterator of plan) {
        let nx = 0;
        let ny = 0;
        for (let index = 0; index < 4; index++) {
            if (iterator == move_types[index]) {
                nx = x + dx[index];
                ny = y + dy[index];
            }
        }
        if (nx< 1 || ny< 1 || nx > N || ny > N) continue;

        x = nx;
        y = ny;

    }
    console.log(`${x} ${y}`);
}

// solution7(5, 'R R R U D D');

// 시각
function solution8(h){
    let count = 0;
    for(let i =0; i <= h; i++){
        for(let j=0; j< 60; j++){
            for(let k=0; k<60; k++){
                if((""+i+j+k).indexOf('3') != -1) count++;
            }
        }
    }
    console.log(count);
}

// solution8(5);

// 왕실의 나이트
function solution9(loc){
    let move_types= [
        [-2,-1],
        [-2,1],
        [2,-1],
        [2,1],
        [-1,-2],
        [1,-2],
        [-1,2],
        [1,2]
    ]
    let count = 0;
    let x = parseInt(loc.split('')[0].charCodeAt()-96);
    let y = parseInt(loc.split('')[1]);
    
    for (const move of move_types) {
        count++;
        console.log(`x +move[0]: ${x +move[0]}`)
        console.log(`y +move[1]: ${y +move[1]}`)
        if(x + move[0] < 1 || y + move[1] < 1 || x + move[0] > 8 || y + move[1] > 8) count--;
    }
    console.log(count);
}

// solution9('a2');

function solution10(str){
    let num = str.split('').filter(n=> !isNaN(n));
    let strArr = str.split('').filter(n=> isNaN(n)).sort().join('');
    let temp = 0;
    for (const iterator of num) {
        temp += parseInt(iterator);
    }
    console.log(strArr + temp);
}

// solution10('K1KA5CB7');

//최대 공약수
let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
let getLCM = (num1, num2) => num1 * num2 / getGCD(num1,num2);

// console.log(getGCD(24,15));
// console.log(getLCM(24,15));

const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
  };
  const BFS = (graph, startNode) =>{
      const visited = [];
      let needVisit = [];

      needVisit.push(startNode);

      while(needVisit.length !== 0){
          const node = needVisit.shift();
          if(!visited.includes(node)){
              visited.push(node);
              needVisit = [...needVisit, ...graph[node]];
          }
      }

      return visited;
  }


  function DFS(graph, startNode){
    const visited = []; // 탐색한 노드
    let needVisit = []; // 탐색해야하는 노드

    needVisit.push(startNode); // 노드 탐색 시작

    while(needVisit.length !== 0){ // 탐색할 노드가 없을 때 까지
        const node = needVisit.shift(); // dfs => queue, shift() 를 사용
        if(!visited.includes(node)){ // 해당 노드가 탐색된 적 없다면
            visited.push(node); // 탐색한 노드에 삽입
            needVisit = [...graph[node], ...needVisit]; // 탐색해야하는 노드에 해당노드의 자식들을 우선순위 앞으로 삽입
        }
    }

    return visited; // 탐색한 순서대로 출력
  }
  
  // 노드 연결 정보
    const recursiveGraph = [
        [],
        [2, 3, 8],
        [1, 7],
        [1, 4, 5],
        [3, 5],
        [3, 4],
        [7],
        [2, 6, 8],
        [1, 7]
    ];

  
  const visited = new Array(graph.length).fill(false);

  function recursiveDFS( graph, v, visited){
        visited[v] = true;
        console.log(v);
        graph[v].forEach(i=>{
            if(!visited[i]) recursiveDFS(graph, i, visited);
        })
        return v;
    }

  console.log(DFS(graph, "A"));
  console.log(BFS(graph, "A"));