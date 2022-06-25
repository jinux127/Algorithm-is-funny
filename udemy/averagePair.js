function averagePair(...rest) {
  // add whatever parameters you deem necessary - good luck!
  const [arr, target] = rest;
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let avg = (arr[pointer1] + arr[pointer2]) / 2;
    if (avg === target) return true;
    else if (avg < target) pointer1 += 1;
    else pointer2 -= 1;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
