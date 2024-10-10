// objcet 객체 생성법
let obj = new Object(); // object객체 생성자 직접 호출
obj.name = "김갑수";
obj.age = "21";
obj.move = move; // 함수 메소드 이름을 말한다

function move (){
  // alert("열심히 달린다");
  document.write("열심히달린다");
  return;
}

document.write(obj.name+"<br>");
document.write(obj.age+"<br>");
obj.move();

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 리터럴(값대입방식) 객체 생성법
let obj2 = {
  name : "김갑수",
  age : 21,
  move : function(){
    document.write("열심히 달린다"+"<br>");
  }
};

document.write(obj2.name+"<br>");
document.write(obj2.age+"<br>");
obj2.move();

// 프로토타입(클래스) 함수 객체 생성
function Person(){ // 프로타타입 함수(생성자 함수)

  this.name = "김갑수"; // this는 자기자신 객체를 뜻함
  this.age = 21;
  this.move = function(){
    document.write("열심히 달린다");
    return;
  }
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

let p = new Person();
document.write(p.name+"<br>");
document.write(p.age+"<br>");
p.move();