function calculate() {
  let exp = document.getElementById("exp");
  let result = document.getElementById("result");

  result.value = eval(exp.value);
  return;
}

// function aaa() {
  // alert("오른쪽 버튼은 사용금지 입니다.");
  // return false;
// }
// window.onload = function() { // onload 이벤트 
//   alter('모든객체가 생성된 후에 로딩됩니다.');
// }

function changeImage() {
  alert("함수에 들어왔나요?");
  let sel = document.getElementById("sel"); // select 객체 찾기
  // alert("객체가 생성되었나요? " + sel);
  let img = document.getElementById("myImg"); // 이미지 객체 찾기
  // alert("객체가 생성되었나요? " + sel);

  //img.onload = function() { //이미지가 로딩되면 익명함수 동작
  let mySpan = document.getElementById("mySpan");
  mySpan.innerHTML = img.width + "X" + img.height;
  // }
  let index = sel.selectedIndex;
  // alert(index);
  // alert(sel.options[index].value);
  img.src = sel.option[index].value;

  // alert(img.src);
}
