//숫자 문자열가 영단어

let s = "one4seveneight";

function solution(s) {
    var answer = 0;
    let arr = ["one","two","three","four","five","six","seven","eight","nine"];
    for (const item of arr) {
        while (s.indexOf(item) != -1) {
            s = s.replace(item,arr.indexOf(item)+1);
        }
    }
    console.log(s);
    return s;
}

solution(s);