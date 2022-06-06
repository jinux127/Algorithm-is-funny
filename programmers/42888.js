// 오픈채팅방

function solution(record) {
  let answer = [];
  const arr = [];
  const id = {};
  record.map((item) => {
    answer.push(item.split(' '));
  });

  answer.map((item) => {
    if (item[0] !== 'Change') {
      arr.push([item[0], item[1]]);
      if (item[0] !== 'Leave') id[item[1]] = item[2];
    } else {
      id[item[1]] = item[2];
    }
  });
  answer = arr.map((item) => {
    return item[0] === 'Enter' ? `${id[item[1]]}님이 들어왔습니다.` : `${id[item[1]]}님이 나갔습니다.`;
  });

  return answer;
}

solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);
