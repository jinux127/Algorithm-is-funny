function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const arr1 = str1.split('');
  const arr2 = str2.split('');
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
    obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(validAnagram('zaz', 'zza'));
