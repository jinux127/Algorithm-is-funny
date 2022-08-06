const requestData1 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(new Error(1));
    }, 1000)
  );
const requestData2 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  );
const requestData3 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(new Error(3));
    }, 3000)
  );
const requestData4 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(4);
    }, 4000)
  );

// Promise.all([requestData1(), requestData2(), requestData3(), requestData4()]).then(console.log).catch(console.error);
// Promise.race([requestData1(), requestData2(), requestData3(), requestData4()]).then(console.log).catch(console.error);
Promise.allSettled([requestData1(), requestData2(), requestData3(), requestData4()]).then(console.log).catch(console.error);
