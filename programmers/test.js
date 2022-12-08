const temp = [];
const temp2 = [];
for (let j = 1; j < 10; j++) {
  if (j % 4 === 0) continue;
  for (let i = 2; i < 10; i++) {
    if (i < 6) {
      temp.push(`${i} * ${j} = ${i * j}`);
    } else {
      temp2.push(`${i} * ${j} = ${i * j}`);
    }
  }
}
let str = '';
let cnt = 0;
console.log(temp2);
temp.forEach((item) => {
  if (cnt === 4) {
    console.log(str);
    str = '';
    cnt = 0;
  }
  cnt++;
  str += `${item}  `;
});
console.log(str);
str = '';
console.log('\n');
temp2.forEach((item) => {
  if (cnt === 4) {
    console.log(str);
    str = ' ';
    cnt = 0;
  }
  cnt++;
  str += `${item}  `;
});
console.log(str);
