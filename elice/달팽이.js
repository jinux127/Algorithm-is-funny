const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = 0;
rl.on('line', function (x) {
  N = Number(x);
  rl.close();
}).on('close', function () {
  const x = { start: 0, cur: 0 };
  const y = { start: 0, cur: 0 };
  const arr = Array.from(new Array(N), () => new Array(N));
  let run = 'y';
  let direction = 1;

  for (let i = 0; i < N * N; i++) {
    arr[x.cur][y.cur] = i + 1; //현재 위치에 값(i+1) 넣기
    if (run == 'y') {
      //Y축 변화
      y.cur += direction;
      if (direction > 0 && N - 1 === y.cur) {
        //Y축 증가시키다 end만났을 경우
        run = 'x';
        x.start += direction;
        4;
      } else if (direction < 0 && y.start === y.cur) {
        //Y축 감소시키다 start만났을 경우
        run = 'x';
        x.end += direction;
      }
    } else {
      //X축 변화
      x.cur += direction;
      if (direction > 0 && N - 1 === x.cur) {
        //X축 증가시키다 end만났을 경우
        run = 'y';
        direction = -1; //방향 변경
        y.end += direction;
      } else if (direction < 0 && x.start === x.cur) {
        //X축 감소시키다 start만났을 경우
        run = 'y';
        direction = 1; //방향 변경
        y.start += direction;
      }
    }
  }
  arr.map((item) => console.log(item.join(' ')));
  process.exit();
});
//  00 10 20 30
//  01 11 21 31
//  02 12 22 32
//  03 13 23 33
