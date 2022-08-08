const regex1 = /\d{2,3}[- .]\d{3,4}[- .]\d{4}/gm;
const regex2 = /-/gm;
const regex3 = /\d{3,4}$/gm;

// console.log('010-999-9999'.match(regex1));
// console.log('010-999-9999'.replace(regex2, '.'));
// console.log('010-999-9999'.replace(regex3, '....'));

const regex4 = /(?:https?:\/\/)?(?:www\.)?youtube.com\/([\w-]+)/gm;

// console.log('https://www.youtube.com/-Zasdfhef'.split(regex4));

const regex5 = /[\w.+-]+@[\w-]+\.[\w.]+/gm;

const str = `aufweufageyfgyseyaufeyuesfyufaeyuafesyuuafsegfeasuy128371237132
wlsdn0127@naver.com
32832fuhifuhewufieiuawfeuiahfw`;

// console.log(str.match(regex5));

const text = `대나무 빨대 구입 문의 : curryyou@bbb-c--c.com http://dogumaster.com http://google.com 010-1111-2222 02-333-7777 curryyou@aaa.com`;

console.log(text.match(/https?:\/\/[\w\-\.]+/g));
console.log(text.match(/\d{2,3}-\d{3,4}-\d{4}/g));
console.log(text.match(/[\w]+@[\w-\.]+/gm));
