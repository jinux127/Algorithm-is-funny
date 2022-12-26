/**
 * 프로미스: 자바스크립트 비동기 처리에 사용되는 객체
 * 프로미스의 3가지 상태
 * 1. 대기 (pending)
 * 2. 이행 (fulfilled)
 * 3. 실패 (rejected)
 *
 */

const getData = () => {
  return new Promise((resolve, reject) => {
    var data = 100;
    resolve(data);
  });
};

const getData_reject = () => {
  return new Promise((resolve, reject) => {
    reject('fail');
  });
};

// getData().then((res) => console.log(res));

// getData_reject()
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));
