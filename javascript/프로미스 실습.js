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

const firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('firstPromise success');
  }, 2000);
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res('secondPromise success');
  }, 3000);
});

const thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej('거부');
    // res('thirdPromise success');
  }, 1000);
});

// Promise.all([firstPromise, secondPromise, thirdPromise]).then((val) => {
//   console.log(val);
// });
/**
 * all 에서 error를 처리하고 싶으면 catch로 사전작업해주면 됨
 */
Promise.all([firstPromise, secondPromise, thirdPromise.catch((err) => err)]).then((val) => {
  console.log(val);
});

/**
 * all과 달리 실패를 하더라도 then을 통해 실행된다. 
 * 배열의 형태로
 * 만약 catch를 넣어주면 에러를 처리하므로 rejected상태가 아닌 fulfilled형태로 바뀌어 출력된다.
 * [
    { status: 'fulfilled', value: 'firstPromise success' },
    { status: 'fulfilled', value: 'secondPromise success' },
    { status: 'fulfilled', value: '거부' }
  ]
 */
Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then((val) => {
  console.log(val);
});

/**
 * 실패든 성공이든 가장먼저 완료된 결과를 반환함.
 */
Promise.race([firstPromise, secondPromise, thirdPromise.catch((err) => err)]).then((val) => {
  console.log(val);
});
