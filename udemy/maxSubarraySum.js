function maxSubarraySum(arr, leng) {
  // add whatever parameters you deem necessary - good luck!
  let result = -Infinity;
  if (arr.length < leng) return null;
  for (let i = 0; i <= arr.length - leng; i++) {
    let target = 0;

    for (let j = 0; j < leng; j++) {
      target += arr[i + j];
    }
    result = result < target ? target : result;
  }
  return result;
}

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
