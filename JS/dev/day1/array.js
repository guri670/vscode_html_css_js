// 자바스크립트 3가지 객체
// 1. 코어객체(내장되어있음 - 사용하기만 하면 됨)
// 2. DOM객체 (태그로 표현함)
// 3. BOM객체 (브라우저를 컨트롤 할 수 있게 만들어진 객체)

// 1. 코어객체
// 1-1 배열객체
// []표현 할 수 있고 Array객체로 할 수도 있다.

// 배열객체 생성
  let arrName = ["형찬","은지","이슬","인서"];

  let value = arrName[0];
  document.write("첫번째 사람의 이름은? " + value);
  arrName[4] = "경현";
  document.write("다섯번째 사람의 이름은? " + arrName[4]);
  arrName[7] = "형구";
  document.write("여섯번째 사람의 이름은? " + arrName[5]);
  let intRoom = arrName.length;
  document.write("생성된 총 열의 갯수는? " + intRoom);
  console.log(intRoom);

  // Array 객체로 생성
  let arrDay = new Array("월","화","수","목","금","토","일");
  for(let i=0 ; i < arrDay.length ; i++){
    document.write(arrDay[i] + "<br>");
  }

  // 나중에 배열값을 담을 수도 있다.
  let week = new Array(7);
  week[0] = "월";
  week[1] = "화";
  week[2] = "수";
  week[3] = "목";
  week[4] = "금";
  week[5] = "토";
  week[6] = "일";
  
  // 몇개를 앞으로 만들지 모르겠다 할때 배열 객체 생성
  let day = new Array();
  day [0] = "";

    // 문제
    // 수학점수가 90점 영어점수가 80점 국어점수가 75점인 사람의 총합과 평균값을
    // 배열을 통해서 구현하시오
    
    // 1. 배열선언하고 점수세팅
    // 2. 반복문으로 합산
    // 3. 배열길이로 나누기
    
    /* 첫번째 방식 (java)
    let score = new array(3);
    socre[0] = "90";
    score[1] = "80";
    score[2] = "75"; */
    
    /* 두번째 방식 
    let score = [90,80,75]; */
    
    /* 세번째 방식
    let score = new Array(90,80,75); */

    // 네번째 방식 
    let score = new Array();
    socre[0] = "90";
    score[1] = "80";
    score[2] = "75"; 
    
    let sum = 0;
    for(let i = 0 ; i < score.length ; i ++){
      sum = sum + score[i]
    }
    document.write("총합은? " + sum);
    document.write("자바스크립트 배열값은 모든 타입의 값을 넣을 수 있다.");
	    
    let any = new Array(5);
    
    any[0] = 0; //숫자담기
    any[1] = "한글"; // 문자열 담기
    any[2] = new Date(); //객체 저장(주소값)
    any[3] = 함수이름; // 함수의 주소값 저장

    // Array 객체의 메소드 사용하기
    // concat() 합치기
    let c = new Array("황","김","박");
    let d = new Array("최");
    let e;

    e = c.concat(d);
	  document.write("e 값은? " + e + "<br>");
	    
	  e = "";
	  e = c.join("--");
	  document.write ("e 값은? "+ e + "<br>");
	    
	  e = "";
	  e = c.reverse();
	  document.write ("e 값은? "+ e + "<br>");

	  e = "";
	  e = c.toString();
	  document.write ("e 값은? "+ e + "<br>");
	    
	  e = "";
	  // c에는 박,김,황 이 들어있음.
	  e = c.slice(1,2); // 1번다음 자리부터 2번째 자리까지
	  document.write ("e 값은? "+ e + "<br>");
	  document.write ("c 값은? "+ c + "<br>");
	    
	  e = "";
	  e = c.sort(); // 정렬을 해준다.
	  document.write ("e 값은? "+ e + "<br>");
