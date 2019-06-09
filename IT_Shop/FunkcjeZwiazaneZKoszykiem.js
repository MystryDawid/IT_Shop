function kup(){
	$("#koszyk").hide();
	$("#zamowienie").show();
  document.getElementById("poleZamowienie").value = "\n";
  zapisywanieSlow("Lp.",4);
  zapisywanieSlow("Nazwa",50);
  zapisywanieSlow("Cena/szt",10);
  zapisywanieSlow("Ilosc",7);71
  zapisywanieSlow("Wartosc",7);
  document.getElementById("poleZamowienie").value += "\n";
  for(coo in koszyk){
    for(co in magazynTabela){
      if(magazynTabela[co]['id'] == koszyk[coo].id){
        zapisywanieSlow(coo,4);
        zapisywanieSlow(magazynTabela[co]['nazwa'],50);
        zapisywanieSlow(magazynTabela[co]['cena'],10);
        zapisywanieSlow(koszyk[coo].ilosc.toString(),7);
        zapisywanieSlow(parseInt(magazynTabela[co]['cena'])*parseInt(koszyk[coo].ilosc),7);
        document.getElementById("poleZamowienie").value += "\n";
        break;
      }
    }
  }
  dostawaf();
}

function wyswietlanieKoszykaMini(){
  document.getElementById('kwota').innerHTML = "Kwota do zapłaty " + ileDoZaplaty() + "zł";
  $("#towaryKoszyk").empty();
  for(a in koszyk){
        $("#towaryKoszyk").append(fWypiszMini(a).innerHTML);
        $("#kup").show();
  }
  if($("#towaryKoszyk").html() == ''){
    $("#towaryKoszyk").html("<h1>Pusty</h1>");
  }
  srodkowanieKoszyka();
}

function doKoszyka(idTowaru,ilosc){
  var towar = new Object();
  towar.id = Number(idTowaru);
  towar.ilosc = Number(ilosc);

  if(koszyk.length>0){
    for(var a=0;a<koszyk.length;a++){
      if(koszyk[a].id == towar.id){
        koszyk[a].ilosc = towar.ilosc;
        alert("Zmieniono ilosc towaru w koszyku na " + towar.ilosc + ".");
        dodawanieStorage(towar);
        return;
      }
    }
      koszyk.push(towar);
      dodawanieStorage(towar);
      alert("Dodano do koszyka.");
      return;
  }else{
    koszyk.push(towar);
    dodawanieStorage(towar);
    alert("Dodano do koszyka.");
    return;
  }
}

function usunZKoszykaMini(c,a){
  koszyk.splice(a, 1);
  wyswietlanieKoszykaMini();
  
  usuwanieStorage(c);
  if(koszyk.length == 0){
    $("#kup").hide();
  } 
}

function ileDoZaplaty(){
  var kwotaDoZaplaty = 0;
  for(co in magazynTabela){
    for(coo in koszyk){
      if(magazynTabela[co]['id'] == koszyk[coo].id){
        kwotaDoZaplaty += koszyk[coo].ilosc*parseInt(magazynTabela[co]['cena']);
      }
    }
  }
  return kwotaDoZaplaty;
}