// 투 포인터

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;

  let idx = 0;
  const result = [];

  for (let j = 1; j < arr.length; j++) {
    if (arr[idx] !== arr[j]) {
      idx += 1;
      arr[idx] = arr[j];
    }
  }
  return idx + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 6, 6, 12, 12, 13]));
