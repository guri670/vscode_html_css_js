// function chk(nm) {
//   alert("함수안에들어왔음")
//   if (nm.value == "") {
//     nm.focus();
//     return;
//   }
//   alert("chk함수안에 들어왔음");
//   let nm = document.getElementById("nm");
//   alert("nm객체 생성되었음" + nm);
//   return;
// }

function checkFilled(obj) {
  alert("함수안에들어왔음")
	if(obj.value == "") { // obj에 입력된 것이 없다면
    alert("아무것도 입력하지 않았음. 포커스로 다시 입력하게 하겠음");
		obj.focus(); // obj에 다시 포커스
	}
}
