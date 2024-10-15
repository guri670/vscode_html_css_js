let tds ="";
let index = 0; // 현재 칸 번호 
let preIndex = 0; // 이전 칸 번호
window.onload = function () { // 화면이 모두 로딩이 된 후에 함수실행
  tds = document.getElementsByTagName("td"); // 각 td 태그를 찾는다
  tds[index].style.backgroundColor = "orangered";
}

window.onkeydown = function(e) { //키 눌림을 감지했을 때
  switch(e.key){
    case "ArrowDown":
      if(index/3 >=2) // 맨 위로 셀이 이동한 경우
        return; // 멈춘다
      
      index = index + 3;
      break;
    
    case "ArrowUp":
      if(index/3 < 1)// 맨 아래로 셀이 이동한 경우     
        return;
      
      index = index -3;
      break;
    case "ArrowLeft":
      if(index%3 == 0) //맨 왼쪽으로 이동한 경우
        return;
      
      index --;
      break;
    
    case "ArrowRight":
      if(index%3 == 2) // 맨 오른쪽으로 이동한 경우
        return;
      
      index ++;
      break;
  }
  tds[index].style.backgroundColor="orangered";
  tds[preIndex].style.backgroundColor="white";
  preIndex = index;
    
}