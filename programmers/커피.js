const exclude = ',';

function solution(text, keyword) {
  let html = '';

  let regex = /[${keyword}]/;
  console.log(text.split(regex));
  return html;
}

solution('커피 3,500원', '3,50');
