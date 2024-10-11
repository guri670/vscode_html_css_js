//DOM 객체 제어하기
let c = document.getElementById("firstP"); // 속성값 id로 객체를 찾는다

document.write("객체의 id는? " + c.id + "<br>");
document.write("객체의 태그는? " + c.tagName + "<br>");
document.write("객체가 담고있는 내용은? " + c.innerHTML + "<br>");
document.write("객체의 스타일? " + c.style.color + "<br>");
document.write("객체의 이벤트 리스너(감지기)는? " + c.onclick + "<br>");
document.write("객체의 너비는? " + c.offsetWidth + "<br>");
document.write("객체의 높이는? " + c.offsetHeight + "<br>");

let span = document.getelementById("myspan");
span.style.color = "#FF6600";
span.style.fontSize = "30px";
span.style.border = "3px dotted skyblue";

function change() {
  let span = document.getElementById("myspan");
  span.style.color = "#FF6600";
  span.style.fontSize = "30px";
  span.style.border = "3px dotted skyblue";
  return;
}

function textChange(){
  let myP = document.getElementById("firstP");
  myP.innerHTML = "무궁화 꽃이<span style='color:red;'>피었습니다.</span>";
  return;
}
