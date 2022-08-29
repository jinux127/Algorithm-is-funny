const usageMinuate = (s, e) => e - s;
const usageFee = (basicTime, basicFee, usageTime, unitTime, unitFee) =>
  usageTime - basicTime <= 0 ? basicFee : basicFee + Math.ceil((usageTime - basicTime) / unitTime) * unitFee;

const doConverMin = (hour, min) => hour * 60 + min;
const endTime = doConverMin(23, 59);
function solution(fees, records) {
  var answer = [];
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const recordObj = {};

  records.map((record) => {
    const [time, number, type] = record.split(' ');
    const [hour, min] = time.split(':').map(Number);
    const convertMin = doConverMin(hour, min);
    if (recordObj[number]) {
      recordObj[number].push(convertMin);
    } else {
      recordObj[number] = [convertMin];
    }
  });

  const carNumbers = Object.keys(recordObj).sort((a, b) => a - b);

  return carNumbers
    .map((number) => {
      return calTime(recordObj[number], basicTime, basicFee, unitTime, unitFee);
    })
    .map((time) => {
      console.log(basicTime, basicFee, time, unitTime, unitFee);
      return usageFee(basicTime, basicFee, time, unitTime, unitFee);
    });
}

const calTime = (feeArr) => {
  const temp = [];

  if (feeArr.length % 2 === 1) {
    const usageTime = usageMinuate(feeArr.pop(), endTime);
    // temp.push(usageFee(basicTime, basicFee, usageTime, unitTime, unitFee));
    temp.push(usageTime);
  }
  while (feeArr.length !== 0) {
    const end = feeArr.pop();
    const start = feeArr.pop();
    const usageTime = usageMinuate(start, end);
    temp.push(usageTime);
  }

  return temp.reduce((acc, cur) => acc + cur, 0);
};
// if (recordMinuate[number]) {
//   recordMinuate[number].push(usageMinuate(start, convertMin));
// } else {
//   recordMinuate[number] = [usageMinuate(start, convertMin)];
// }

solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ]
);
