$(document).ready(function(){ 
  // alert("hello world");
  $("#btn1").click(function(){
    $("p").hide();
  });
  $("#btn1").dblclick(function(){
    $("p").show();
  });

  // 아이디를 부를때는 # 표시를 한다.
  $("#btn2").click(function(){
    $("#divid").hide();
  });
  
  // $("셀렉터").메소드(function(){alert("qqqq")});


  $("#btn3").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  })

  $("#filep").click(function(){
    $("#panel").slideDown("slow");
  });
  $("#filep").dblclick(function(){
    $("#panel").slideup("slow")
  });
}); 

// 제이쿼리는 모든 순서가 실행된 후 마지막에 실행된다.