const convertStr = (m) => {
  return m.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a');
};

function solution(m, musicinfos) {
  var answer = '';

  const listenSound = convertStr(m);
  const map = new Map();
  for (const musicInfo of musicinfos) {
    const [start, finish, title, _score] = musicInfo.split(',');
    const duration = Number(finish.slice(0, 2)) * 60 + Number(finish.slice(3, 5)) - (Number(start.slice(0, 2)) * 60 + Number(start.slice(3, 5)));
    const score = convertStr(_score);

    const playScore = score.repeat(Math.ceil(duration / score.length)).slice(0, duration);
    if (playScore.includes(listenSound)) {
      map.set(title, { score, playScore });
    }
  }
  const arr = [...map.keys()].sort((a, b) => map.get(a).playScore.length - map.get(b).playScore.length);
  return arr.length >= 1 ? arr[0] : '(None)';
}

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
