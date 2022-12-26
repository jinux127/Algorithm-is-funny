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

Promise.myAll = (promises = []) => {
  return new Promise((res, rej) => {
    let count = promises.length;
    const returnArray = [];
    promises.forEach((ps, index) => {
      Promise.resolve(ps)
        .then((val) => {
          returnArray[index] = val;
          --count;
          !count && res(returnArray);
        })
        .catch(rej);
    });
  });
};
// Promise.all([firstPromise, secondPromise, thirdPromise]).then((val) => {
//   console.log(val);
// });
/**
 * all 에서 error를 처리하고 싶으면 catch로 사전작업해주면 됨
 */
Promise.all([firstPromise, secondPromise, thirdPromise.catch((err) => err)]).then((val) => {
  console.log(val);
});

Promise.myAll([firstPromise, secondPromise, thirdPromise.catch((err) => err)]).then((val) => {
  console.log(val);
});

Promise.myAllSettled = (promises = []) => {
  return new Promise((res) => {
    let count = promises.length;
    const returnArray = [];

    promises.forEach((ps, index) => {
      Promise.resolve(ps)
        .then((val) => {
          returnArray[index] = { status: 'fulfilled', val };
          --count;
        })
        .catch((e) => {
          returnArray[index] = {
            status: 'rejected',
            reason: e,
          };
          --count;
        })
        .finally(() => !count && res(returnArray));
    });
  });
};
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
Promise.myAllSettled([firstPromise, secondPromise, thirdPromise]).then((val) => {
  console.log(val);
});

/**
 * 실패든 성공이든 가장먼저 완료된 결과를 반환함.
 */
Promise.race([firstPromise, secondPromise, thirdPromise.catch((err) => err)]).then((val) => {
  console.log(val);
});
