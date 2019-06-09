function zapisywanieSlow(slowo,maks){
  document.getElementById("poleZamowienie").value += slowo;
  for(var a = 0;a<maks - slowo.length;a++){
    document.getElementById("poleZamowienie").value += " ";
  }
}


function dostawaf(){
  var a = 0;
  if(document.getElementById('dostawa').value == "Poczta polska 10zł"){
    document.getElementById("poleZamowienie").value += "\nDostawa :Poczta polska.";
    a = 10;
  }else{
    document.getElementById("poleZamowienie").value += "\nDostawa :Kurier.";
    a = 20;
  }

  if(document.getElementById('zaplata').value == "Bank"){
    document.getElementById("poleZamowienie").value += "\nPłatność :Bank.";
  }else{
    document.getElementById("poleZamowienie").value += "\nPłatność :PayPal.";
  }
  document.getElementById("poleZamowienie").value += "\nDo zapłaty " + (ileDoZaplaty() + a) + "zł.";
}

function dodawanieStorage(co){
  if (typeof(Storage) !== "undefined") {
      if (localStorage.getItem(co.id) != null) {
        localStorage.removeItem(co.id);
        localStorage.setItem(co.id, JSON.stringify(co));
      }else{
        localStorage.setItem(co.id, JSON.stringify(co));
      }
  }
}