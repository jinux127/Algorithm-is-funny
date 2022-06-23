function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.

  const arr1 = String(a).split('');
  const arr2 = String(b).split('');

  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

  arr1.map((item) => {
    obj1[item] ? (obj1[item] += 1) : (obj1[item] = 1);
  });
  arr2.map((item) => {
    obj2[item] ? (obj2[item] += 1) : (obj2[item] = 1);
  });

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
  // String(b)
}

console.log(sameFrequency(34, 14));
