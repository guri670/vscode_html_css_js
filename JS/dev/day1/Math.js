// 0에서 99까지의 랜덤 숫자를 출력하시오
let m;
let n;

for(let i = 0 ; i < 10 ; i ++){
  m = math.random()*100; // 0~99.999999사이의 값이 나온다
  n = math.floor(m); // 소수점은 제거한 정수
}

document.write("랜덤값은?" + n);

setTimeout('location.reload()',3000);

// let current = new Date(); // 현재 시간을 가진 Date 객체 생성
// if(current.getSeconds() % 2 == 0)
//   document.body.style.backgroundColor = "violet";
// else
//   document.body.style.backgroundColor = "lightskyblue";

// document.write("현재 시간 : ");
// document.write(current.getHours(), "시,");
// document.write(current.getMinutes(), "분,");
// document.write(current.getSeconds(), "초<br>");
