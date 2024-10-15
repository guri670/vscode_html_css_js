function change1(obj, size, color) {
	obj.style.color = color;
	obj.style.fontSize = size;
}

function change() {
	let spanArray = document.getElementsByTagName("span");
	for(let i=0; i<spanArray.length; i++) {
		var span = spanArray[i];
		span.style.color = "orchid";
		span.style.fontSize = "20px";
	}
}

function fruit(){
  //let sp = document.getElementsByTagName("span"); //  여러개의 span태그 컬렉션 집합
	let cls = document.getElementsByClassName("a"); // 클래스 속성(프로퍼티)으로 객체를 찾는다.
	for(let i = 0 ; i < cls.length ; i++){
		let entityCls = cls[i];
		entityCls.style.color="red";
	}
  return;
}

// document.open();
// document.write("<html><title></title><body>새로열립니다.</body></html>");
// document.close();