let width=1; // 테두리 두께
function down(obj) {
	obj.style.fontStyle = "italic";
}
function up(obj) {
	obj.style.fontStyle = "normal";
}
function over(obj) {
	obj.style.borderColor = "violet";
	// 테두리 폭이 0일 때 색은 보이지 않는다.
}
function out(obj) {
	obj.style.borderColor = "lightgray";
}
function wheel(e, obj) { // e는 이벤트 객체
	if(e.wheelDelta < 0) { // 휠을 아래로 굴릴 때
		width--; // 폭 1 감소
		if(width < 0) width = 0; // 폭이 0보다 작아지지 않게
	}
	else // 휠을 위로 굴릴 때
		width++; // 폭 1 증가
	obj.style.borderStyle = "ridge";
	obj.style.borderWidth = width+"px";
}
