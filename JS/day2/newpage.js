function winOpen(){

  window.open("<%=request.getContextPath()%>","winName","width=300,height=300");
  
  return;
}