function createQueryString(object) {
  if (!Object.keys(object).length) {
    return '';
  }
  const result = [];

  Object.keys(object).map((key) => {
    if (object[key] !== null && object[key] !== undefined) {
      if (typeof object[key] === 'object') {
        object[key].map((item) => {
          result.push(`${key}=${encodeURIComponent(item)}`);
        });
      } else {
        result.push(`${key}=${encodeURIComponent(object[key])}`);
      }
    }
  });
  console.log('?' + result.join('&'));
  return '?' + result.join('&');
}

function solution(input) {
  var object = JSON.parse(input);
  var answer = createQueryString(object);
  return answer;
}

createQueryString({ foo: [1, 2, 3], bar: null, baz: 'this is test', quux: 'foo' });
