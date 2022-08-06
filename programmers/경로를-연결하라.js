function solution(paths) {
  const arr = [];
  paths.map((path) => {
    console.log(path.split('/'));
    const detailPathArr = path.split('/');
    detailPathArr.map((detailPath) => {
      if (detailPath === '...') {
        arr.pop();
        arr.pop();
      } else if (detailPath === '..') {
        arr.pop();
      } else if (detailPath === '.') {
      } else if (detailPath) {
        arr.push(detailPath);
      }
    });
  });

  return '/' + arr.join('/');
}

console.log(solution(['/foo', 'baz/asdf', '...', '.', , 'ab']));
