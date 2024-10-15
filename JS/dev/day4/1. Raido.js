function check(){
  let korCity = document.getElementsByName("city"); // name으로 객체 찾기
  //배열과 for문은 항상 붙어다닌다.
  let alramCity = "";
  for(let i = 0 ; i < korCity.length ; i++){
    if(korCity[i].checked == true) {
      // 각 값이 체크 되어있는지 물어본다.
      alramCity = korCity[i]; // 체크되어있으면 체크 되어있는 객체를 옮겨 담는다
    }
  }
  if(alramCity ==""){
    alert("선택한 값이 없어요");
  } else {
    alert("선택한 도시는 ? " + alramCity.value);
  }
  return;
}

