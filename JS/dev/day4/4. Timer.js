let timerID = null;

function startTimer(time) {
  timerID = setTimeout("load('http://naver.com')",time);
}

function load(url){
  window.document.location.href = url; // 매개변수로 넘어온 url에 이동한다 
}

function cancelTimer(){
  clearTimeout(timerID);
}