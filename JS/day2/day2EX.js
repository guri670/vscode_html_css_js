function change(){
  let sp = document.getElementsByTagName("span")
  for(let i = 0 ; i < sp.length ; i++){
    let entitySp = sp[i];
    entitySp.style.color="orange";
		entitySp.style.fontSize = "30px";
  }
  return;
}