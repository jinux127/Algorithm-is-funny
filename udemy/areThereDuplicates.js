function areThereDuplicates(...rest) {
  // good luck. (supply any arguments you deem necessary.)
  return [...new Set(rest)].length !== rest.length;
}

console.log(areThereDuplicates(1, 2, 3, 4));
