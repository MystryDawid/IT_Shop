

function usuwanieStorage(co){
  localStorage.removeItem(co);
}

function sprawdzanieStorage(){
  for(co in localStorage){
    if(JSON.parse(localStorage[co]).id != undefined){
      koszyk.push(JSON.parse(localStorage[co]));
    }
  }
}
