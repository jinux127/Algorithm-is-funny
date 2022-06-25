// function findLongestSubstring(str) {
//   let cnt = 0;
//   if (!str) return cnt;
//   for (let i = 0; i < str.length; i++) {

//     cnt += 1;
//     if (str[i] === str[i + 1]) return cnt;
//   }
//   return cnt;
// }

console.log(findLongestSubstring('thisisawesome'));

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
