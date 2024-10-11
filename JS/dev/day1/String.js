let str = new String("Dream come true");

document.write(str.indexOf('ea'))
document.write("<br>")
document.write(str.indexOf(true))
document.write("<br>")

//indexOf
let position = str.indexOf("come");
document.write("come 자리 위치는? " + position);
document.write("<br>")
document.write("<br>")

let position2 = str.indexOf("hello");
document.write("hello 자리 위치는? "+ position2);
document.write("<br>")
document.write("<br>")

if(position2 == -1){
    document.write("해당하는 단어는 포함되어 있지 않습니다.");
}else{
    document.write("해당하는 단어는 "+position2+" 번 자리에 있습니다.");
}


document.write("<br>")
document.write("<br>")

// let str3 = prompt("글자를 입력하세요", "");
// let position3 = str3.indexOf("good"); // good 이라는 단어가 있는지 없는지 체크한다

// if(position3 == -1){
//     document.write("해당하는 단어는 포함되어 있지 않습니다.");
// }else{
//     document.write("해당하는 단어는 "+position3+" 번 자리에 있습니다.");
// } 

//substr 함수 : 글자 자르기
let str4 = "무궁화꽃이 피었습니다.";
let value = str4.substr(0,3); // 0번 부터 3개
document.write("값은? "+ value);


document.write("<br>")
document.write("<br>")
//substring 함수 : sutbstring(a,b) a자리부터 b자리까지 

let value2 = str4.substring(0,2);
document.write("값2는? "+value2);

document.write("<br>")
document.write("<br>")

let s = "안녕    하세요";
let ss = s.trim();
document.write("공백제거? "+ss);

document.write("<br>")

document.write("")



