function triangle(row) {
  if (row.length === 1) return row;
  const arr = row.split("");
  const newArr = [];
  const colorArr = ["R", "G", "B"];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) newArr.push(arr[i]);
    else {
      newArr.push(
        colorArr.filter((item) => item !== arr[i] && item !== arr[i + 1])[0]
      );
    }
  }
  return triangle(newArr.join(""));
}

console.log(triangle("RRGBRGBB"));
