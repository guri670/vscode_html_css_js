let sum = 0; //누적합을 담는 변수 sum (전역설정)

function calc(obj){ // 인자값을 받을 매개변수를 만든다.
  if (obj.checked) { // obj.checked == true와 같음, 결과값이 true(참) 
    sum = sum + parseInt(obj.value); //숫자형으로 바꿈
  } else {
    sum = sum - parseInt(obj.value);
  }
  document.getElementById("sumtext").value = sum;
  return;
}