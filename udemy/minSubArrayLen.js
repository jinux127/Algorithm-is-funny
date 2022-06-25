function minSubArrayLen(arr, target) {
  let result = 999;
  let temp = 0;
  let cnt = 0;
  let j = 0;
  let isNoAnswer = true;
  for (let i = 0; i < arr.length; i++) {
    j = i;

    while (temp < target && j < arr.length) {
      temp += arr[j];
      cnt += 1;
      j += 1;
    }

    if (temp >= target) {
      isNoAnswer = false;
      result = result > cnt ? cnt : result;
    }

    temp = 0;
    cnt = 0;
  }

  if (isNoAnswer) return 0;
  else result;

  return result;
}

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
