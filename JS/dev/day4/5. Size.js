//이 예제는 브라우저에서 바로 실행시키면 보안의 이유로 실행되지 않지만, window.open()으로 생성한 윈도우 내에서는 잘 작동함. 

function startScroll(interval){
  setInterval("autoScroll()",interval);
}

function autoScroll(){
  window.scrollBy(0.10);
}