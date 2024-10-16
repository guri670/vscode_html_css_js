//이 예제는 브라우저에서 바로 실행시키면 보안의 이유로 실행되지 않지만, window.open()으로 생성한 윈도우 내에서는 잘 작동함. 

function startScroll(interval){
  setInterval(autoScroll, interval);  // 문자열 대신 함수 참조 전달
}

function autoScroll(){
  window.scrollBy(0, 10);  // 세로 방향으로 10픽셀 스크롤
}