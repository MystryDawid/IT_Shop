var koszyk = new Array();
var szerokoscPodKategori = "30%";
var coJestWypisywane = "";
var procesory = "<h1 id='podKategorie' class='podKategorieNaglowek' style='padding-left: 0px;' onclick=Wypisywanie('procesor','typ','procesor')>Procesory</h1> \
                <ul> \
                <li class='podKategorieNaglowek' onclick=wypisywanieAMD('procesor')>AMD\
                  <li class='podKategorieLista' onclick=Wypisywanie('ryzen3','generacja','procesor')>Ryzen 3</li>\
                  <li class='podKategorieLista' onclick=Wypisywanie('ryzen5','generacja','procesor')>Ryzen 5</li>\
                  <li class='podKategorieLista' onclick=Wypisywanie('ryzen7','generacja','procesor')>Ryzen 7</li>\
                </li>\
                <li class='podKategorieNaglowek' onclick=Wypisywanie('Intel','firma','procesor')>Intel\
                <li class='podKategorieLista' onclick=Wypisywanie('i3','generacja','procesor')>i3</li>\
                <li class='podKategorieLista' onclick=Wypisywanie('i5','generacja','procesor')>i5</li>\
                <li class='podKategorieLista' onclick=Wypisywanie('i7','generacja','procesor')>i7</li>\
                </li></ul>"
var kartygraficzne = "<h1 id='podKategorie' class='podKategorieNaglowek' style='padding-left: 0px;' onclick=Wypisywanie('karta_graficzna','typ','karta_graficzna')>Karty graficzne</h1> \
                <ul> \
                <li class='podKategorieNaglowek' onclick=wypisywanieAMD('karta_graficzna')>AMD\
                <li class='podKategorieLista' onclick=Wypisywanie('RX500','generacja','karta_graficzna')>RX500</li>\
                <li class='podKategorieLista' onclick=Wypisywanie('VEGA','generacja','karta_graficzna')>VEGA</li>\
                </li>\
                <li class='podKategorieNaglowek' onclick=Wypisywanie('Nvidia','firma','karta_graficzna')>Nvidia\
                <li class='podKategorieLista' onclick=Wypisywanie('GTX1000','generacja','karta_graficzna')>GTX1000</li>\
                <li class='podKategorieLista' onclick=Wypisywanie('GTX900','generacja','karta_graficzna')>GTX900</li>\
                </li></ul>"
var ram = "<h1 id='podKategorie' class='podKategorieNaglowek' style='padding-left: 0px;' onclick=Wypisywanie('RAM','typ','RAM')>RAM</h1> \
                <ul> \
                <li class='podKategorieNaglowek' onclick=Wypisywanie('ddr2','generacja','RAM')>DDR2</li>\
                <li class='podKategorieNaglowek' onclick=Wypisywanie('ddr3','generacja','RAM')>DDR3</li>\
                <li class='podKategorieNaglowek' onclick=Wypisywanie('ddr4','generacja','RAM')>DDR4</li></ul>"


function cofnij(){
  $("#Logowanie").hide();
  $("#blury").hide();
}


function cofnijKoszyk(){
  $("#koszyk").hide();
  $("#blury").hide();
  $("#kup").hide();
}

function kontakt(){
  $("#kontaktowanie").show();
  $("#blury").show();
}

function cofnijK(){
  $("#kontaktowanie").hide();
  $("#blury").hide();
}

function cofnijZamowienie(){
  $("#zamowienie").hide();
  $("#blury").hide();
}

function Szukaj(){
  $("#pojemnoscFkartgraficzne").hide();
  $("#rdzenieF").hide();
  $("#watkiF").hide();
  $("#pojemnoscFram").hide();
  $("#opoznieniaFram").hide();
  $("#btnFiltr").hide();
  wzorTablicaTowarow = [];
  towaryDoWypisania = 0;
  ktoraKategoria = kategorie;
  strona = 2;
  tablicaTowarow = [];
  console.log(tablicaTowarow,wzorTablicaTowarow);
  switch(document.getElementById("selectorKategori").value){
    case "W"://wszystko
    console.log("dziala");
      for(co in magazynTabela){
        if(magazynTabela[co]['nazwa'].includes(document.getElementById('szukane').value)){
          tablicaTowarow.push(magazynTabela[co]);
          wzorTablicaTowarow.push(magazynTabela[co]);
          towaryDoWypisania++;
        }
      }
      break;
    case "P"://procesory
      ktoraKategoria = 'procesor';
      for(co in magazynTabela){
        if(magazynTabela[co]['nazwa'].includes(document.getElementById('szukane').value) && magazynTabela[co]['typ'] == "procesor"){
          tablicaTowarow.push(magazynTabela[co]);
          wzorTablicaTowarow.push(magazynTabela[co]);
          towaryDoWypisania++;
          $("#rdzenieF").show();
          $("#watkiF").show();
          $("#btnFiltr").show();
        }
      }
      break;
    case "K"://karty graficzne
      ktoraKategoria = 'karta_graficzna'

      for(co in magazynTabela){
        if(magazynTabela[co]['nazwa'].includes(document.getElementById('szukane').value) && magazynTabela[co]['typ'] == "karta_graficzna"){
          tablicaTowarow.push(magazynTabela[co]);
          wzorTablicaTowarow.push(magazynTabela[co]);
          towaryDoWypisania++;
          $("#pojemnoscFkartgraficzne").show();
          $("#btnFiltr").show();
        }
      }
      break;
    case "R"://ram
      ktoraKategoria = 'RAM';
      for(co in magazynTabela){
        if(magazynTabela[co]['nazwa'].includes(document.getElementById('szukane').value) && magazynTabela[co]['typ'] == "RAM"){
          tablicaTowarow.push(magazynTabela[co]);
          wzorTablicaTowarow.push(magazynTabela[co]);
          towaryDoWypisania++;
          $("#pojemnoscFram").show();
          $("#opoznieniaFram").show();
          $("#btnFiltr").show();
        }
      }
      break;
  }
  if(towaryDoWypisania == 0){
    $("#towary").empty();
    $("#towary").html("<h1>Nie ma takiego towaru.</h1>");
    return;
  }
  console.log(tablicaTowarow,wzorTablicaTowarow);
  jakieSortowanie();
}

function usunZKoszykaMini(c,a){
  console.log(c);
  koszyk.splice(a, 1);
  wyswietlanieKoszykaMini();
  
  usuwanieStorage(c);
  if(koszyk.length == 0){
    $("#kup").hide();
  }
  
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
      koszyk.push();
      dodawanieStorage(towar);
      alert("Dodano do koszyka.");
      return;
  }else{
    koszyk.push(towar);
    dodawanieStorage(towar);
    alert("Dodano do koszyka.");
  }

}

$(document).on( 'click', '.doKoszyka', function(){
   if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        event.stopPropagation();
    }
  doKoszyka(this.name,$( this ).siblings()[3].value);
});

function przejdzDoKoszyk(){
  wyswietlanieKoszykaMini();
  $("#koszyk").show();
  $("#blury").show();
    
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


function srodkowanieKoszyka(){
  $("#koszyk").css({top: 100, left: window.innerWidth/2 - $("#koszyk").width()/2});
}

function wyswietlanieKoszykaMini(){//napisac funkcje do wypsiywanie koszyka
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


$(document).ready(function() {
  $(".podKategorie").mouseover(function(){
    console.log("dziala");
    $(".podKategorie").show().stop().animate({width:szerokoscPodKategori});
  });
  $(".podKategorie").mouseleave(function(){
    $(".podKategorie").stop().animate({width:"0%"},function(){
      $(".podKategorie").hide();
    });
  });

  $("#Procesory").mouseover(function(){
    $(".podKategorie").show().html(procesory).stop().animate({width:szerokoscPodKategori});
  });
  $("#Procesory").mouseleave(function(){
    $(".podKategorie").stop().animate({width:"0%"},function(){
      $(".podKategorie").hide();
    });
  });

  $("#kartygraficzne").mouseover(function(){
    $(".podKategorie").show().html(kartygraficzne).stop().animate({width:szerokoscPodKategori});
  });
  $("#kartygraficzne").mouseleave(function(){
    $(".podKategorie").stop().animate({width:"0%"},function(){
      $(".podKategorie").hide();
    });
  });

  $("#ram").mouseover(function(){
    $(".podKategorie").show().html(ram).stop().animate({width:szerokoscPodKategori});
  });
  $("#ram").mouseleave(function(){
    $(".podKategorie").stop().animate({width:"0%"},function(){
      $(".podKategorie").hide();
  });
  });
});


  function nastepnaStrona(){
    if(towaryDoWypisania/naStroneTowarow>strona || towaryDoWypisania/naStroneTowarow == strona && towaryDoWypisania%naStroneTowarow != 0){
      $("#towary").empty();
      strona++;
      WypisywanieNaStrony();
      document.getElementById("gdzie").innerHTML = "Strona " + strona;
    }
  }

  function poprzedniaStrona(){
    if(strona>1){
      strona--;
      $("#towary").empty();
      WypisywanieNaStrony();
      document.getElementById("gdzie").innerHTML = "Strona " + strona;
    }
  }

  function jakieSortowanie(){
    switch(document.getElementById("selector").value){
      case "cenaRosnaco":
        sorotwanieCenaR();
        strona = 2;
        poprzedniaStrona();
        break;
      case "cenaMalajaco":
        sorotwanieCenaM();
        strona = 2;
        poprzedniaStrona();
        break;
    }
  }

  function sorotwanieCenaR(){
    for(var a = 0;a<towaryDoWypisania;a++){
        for(var co = 0;co<towaryDoWypisania-1;co++){
          if(parseInt(tablicaTowarow[a]["cena"])<parseInt(tablicaTowarow[co]["cena"])){
            var tmp = tablicaTowarow[a];
            tablicaTowarow[a] = tablicaTowarow[co];
            tablicaTowarow[co] = tmp;
          }
        }
      }
  }
  function sorotwanieCenaM(){
    for(var a = 0;a<towaryDoWypisania;a++){
        for(var co = 0;co<towaryDoWypisania-1;co++){
          if(parseInt(tablicaTowarow[a]["cena"])>parseInt(tablicaTowarow[co]["cena"])){
            var tmp = tablicaTowarow[a];
            tablicaTowarow[a] = tablicaTowarow[co];
            tablicaTowarow[co] = tmp;
          }
        }
      }
  }

function filtrowanieLepsze(){
  switch(ktoraKategoria){
    case 'procesor':
      ramUnchecked();
      kartaGraficznaUnchecked();
      tablicaTowarow = [];
      zastepczaTablicaTowarow = wzorTablicaTowarow;

      filtr("rdzenie");
      filtr("cache");
      break;
    case 'RAM':
      kartaGraficznaUnchecked();
      procesorUnchecked();
      tablicaTowarow = [];
      zastepczaTablicaTowarow = wzorTablicaTowarow;

      filtr('pojemnosc');
      filtr("opoznienie");
      break;
    case 'karta_graficzna':
      ramUnchecked();
      procesorUnchecked();
      tablicaTowarow = [];
      zastepczaTablicaTowarow = wzorTablicaTowarow;

      filtr('Pamiec RAM');
      break;
  }
  towaryDoWypisania = tablicaTowarow.length;
  strona = 2;
  jakieSortowanie();
}

function ramUnchecked(){
  var filtry = document.getElementsByName("pojemnosc");
  for(co in filtry){
    filtry[co].checked = false;
  }
  var filtry = document.getElementsByName("opoznienie");
  for(co in filtry){
    filtry[co].checked = false;
  }
}

function kartaGraficznaUnchecked(){
  var filtry = document.getElementsByName("Pamiec RAM");
  for(co in filtry){
    filtry[co].checked = false;
  }

}

function procesorUnchecked(){
  var filtry = document.getElementsByName("rdzenie");
  for(co in filtry){
    filtry[co].checked = false;
  }
  var filtry = document.getElementsByName("cache");
  for(co in filtry){
    filtry[co].checked = false;
  }
}


function filtr(czegoSzukasz){
  tablicaTowarow = [];
  var szukane = document.getElementsByName(czegoSzukasz);
  for(var b = 0;b < zastepczaTablicaTowarow.length;b++){
    tablicaTowarow.push(zastepczaTablicaTowarow[b]);
  }
  for(var co = 0;co<szukane.length;co++){
    if(szukane[co].checked == true){
      for(var a = tablicaTowarow.length - 1;a>=0;a--){
        var CzySzukane = 0;
        for(var coo = 0;coo<szukane.length;coo++){
          if(szukane[coo].checked == true && szukane[coo].value == parseInt(tablicaTowarow[a][czegoSzukasz])){
            CzySzukane = 1;
          }
        }
        if(CzySzukane == 0){
          tablicaTowarow.splice(a,1);
        }
      }
      break;
    }
  }
  zastepczaTablicaTowarow = tablicaTowarow;
}

function kup(){
	$("#koszyk").hide();
	$("#zamowienie").show();
  document.getElementById("poleZamowienie").value = "";
  zapisywanieSlow("Lp.",4);
  zapisywanieSlow("Nazwa",50);54
  zapisywanieSlow("Cena/szt",10);64
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

function ileNaStronie(){
  naStroneTowarow = document.getElementById("ileNaStronie").value;
  jakieSortowanie();
}

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
