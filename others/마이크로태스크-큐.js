setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

// 프로미스의 후속 처리 메서드의 콜백 함수는 마이크로태스크 큐에 저장됨.
// 비동기 함수의 콜백 함수나 이벤트 핸들러는 태스크 큐에 일시 저장됨.
// 마이크로태스크 큐는 태스크 큐보다 우선순위가 높음

// 결과:
// 2
// 3
// 1
