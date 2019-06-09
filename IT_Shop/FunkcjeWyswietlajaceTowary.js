function wyswietlanieWyszystkiego(magazyn){
  $("#pojemnoscFkartgraficzne").hide();
  $("#rdzenieF").hide();
  $("#watkiF").hide();
  $("#pojemnoscFram").hide();
  $("#opoznieniaFram").hide();
  $("#btnFiltr").hide();
  towaryDoWypisania = 0;
  var lista = Object.keys(magazyn.val().Towary);
  $("#towary").empty();
  tablicaTowarow = [];
  magazynTabela = [];
  towary = document.getElementById("towary");
  for(co in lista){// w tablicy
    magazynTabela.push(magazyn.val().Towary[co]);
    tablicaTowarow.push(magazyn.val().Towary[co]);
    towaryDoWypisania++;
  }
  strona = 2;
  jakieSortowanie();
  document.getElementById("gdzie").innerHTML = "Strona " + strona;
}
////////////////////////////////////////////////////////////////////////////////
function fProcesory(M){
  var blokTowaru = document.createElement("div");
  var blokNazwa = document.createElement("div");
  var blokObraz = document.createElement("img");
  var blokCeny = document.createElement("div");
  var blokSpecyfikacja = document.createElement("div");
  var liczba = document.createElement("INPUT");
  liczba.setAttribute("type", "number");
  liczba.setAttribute("placeholder", "Ilosc");
  liczba.setAttribute("value", 1);
  liczba.setAttribute("min",1);
  var doKoszyka = document.createElement("INPUT");
  doKoszyka.setAttribute("type", "button");
  doKoszyka.setAttribute("value", "Do koszyka");
  doKoszyka.setAttribute("name", M['id']);

  $(blokObraz).attr("src",M['obrazek']);
  blokNazwa.innerHTML = M['nazwa'];
  blokCeny.innerHTML = M['cena'] + " zł";

  $(blokTowaru).addClass('blokTowaru');
  $(blokNazwa).addClass('nazwa');
  $(blokObraz).addClass('Obraz');
  $(blokCeny).addClass('Cena');
  $(blokSpecyfikacja).addClass('Specyfikacja');
  $(liczba).addClass('Liczba');
  $(doKoszyka).addClass('doKoszyka');

  var ul = document.createElement('ul');
  var generacja = document.createElement('li');
  var firma = document.createElement('li');
  var architektura = document.createElement('li');
  var taktowanie = document.createElement('li');
  var socket = document.createElement('li');
  var cache = document.createElement('li');
  var rdzenie = document.createElement('li');
  var watki = document.createElement('li');

  generacja.innerHTML = "Generacja : " + M["generacja"];

  ul.appendChild(generacja);
  firma.innerHTML = "Firma : " + M["firma"];
  ul.appendChild(firma);
  architektura.innerHTML = "Architektura : " + M["architektura"];
  ul.appendChild(architektura);
  taktowanie.innerHTML = "Taktowanie : " + M["taktowanie"];
  ul.appendChild(taktowanie);
  socket.innerHTML = "Socket : " + M["socket"];
  ul.appendChild(socket);
  cache.innerHTML = "Cache : " + M["cache"];
  ul.appendChild(cache);
  rdzenie.innerHTML = "Rdzenie : " + M["rdzenie"];
  ul.appendChild(rdzenie);
  watki.innerHTML = "Watki : " + M["watki"];
  ul.appendChild(watki);
  blokSpecyfikacja.innerHTML = ul.innerHTML;
  blokTowaru.prepend(blokCeny);

  blokTowaru.append(liczba);
  blokTowaru.append(doKoszyka);
  blokTowaru.prepend(blokObraz);
  blokTowaru.prepend(blokNazwa);
  blokTowaru.append(blokSpecyfikacja);
  return blokTowaru;
}
////////////////////////////////////////////////////////////////////////////////
function fKartyGraficzne(M){

  var blokTowaru = document.createElement("div");
  var blokNazwa = document.createElement("div");
  var blokObraz = document.createElement("img");
  var blokCeny = document.createElement("div");
  var blokSpecyfikacja = document.createElement("div");
  var liczba = document.createElement("INPUT");
  liczba.setAttribute("type", "number");
  liczba.setAttribute("placeholder", "Ilosc");
  liczba.setAttribute("value", 1);
  liczba.setAttribute("min",1);
  var doKoszyka = document.createElement("INPUT");
  doKoszyka.setAttribute("type", "button");
  doKoszyka.setAttribute("value", "Do koszyka");
  doKoszyka.setAttribute("name", M['id']);

  $(blokObraz).attr("src",M['obrazek']);
  blokNazwa.innerHTML = M['nazwa'];
  blokCeny.innerHTML = M['cena'] + " zł";

  $(blokTowaru).addClass('blokTowaru');
  $(blokNazwa).addClass('nazwa');
  $(blokObraz).addClass('Obraz');
  $(blokCeny).addClass('Cena');
  $(blokSpecyfikacja).addClass('Specyfikacja');
  $(liczba).addClass('Liczba');
  $(doKoszyka).addClass('doKoszyka');

  var ul = document.createElement('ul');
  var generacja = document.createElement('li');
  var firma = document.createElement('li');
  var taktowanie = document.createElement('li');
  var Taktowaniepamieci = document.createElement('li');
  var PamiecRAM = document.createElement('li');
  var Interfejsy = document.createElement('li');

  generacja.innerHTML = "Generacja : " + M["generacja"];
  ul.appendChild(generacja);
  firma.innerHTML = "Firma : " + M["firma"];
  ul.appendChild(firma);
  taktowanie.innerHTML = "Taktowanie : " + M["taktowanie"];
  ul.appendChild(taktowanie);
  Taktowaniepamieci.innerHTML = "Taktowanie pamięci : " + M["Taktowanie pamięci"];
  ul.appendChild(Taktowaniepamieci);
  PamiecRAM.innerHTML = "Pamięci : " + M["Pamiec RAM"];
  ul.appendChild(PamiecRAM);
  Interfejsy.innerHTML = "Interfejsy : " + M["Interfejsy"];
  ul.appendChild(Interfejsy);
  blokSpecyfikacja.innerHTML = ul.innerHTML;
  blokTowaru.prepend(blokCeny);

  blokTowaru.append(liczba);
  blokTowaru.append(doKoszyka);
  blokTowaru.prepend(blokObraz);
  blokTowaru.prepend(blokNazwa);
  blokTowaru.append(blokSpecyfikacja);
  return blokTowaru;
}
////////////////////////////////////////////////////////////////////////////////
function fram(M){

  var blokTowaru = document.createElement("div");
  var blokNazwa = document.createElement("div");
  var blokObraz = document.createElement("img");
  var blokCeny = document.createElement("div");
  var blokSpecyfikacja = document.createElement("div");
  var liczba = document.createElement("INPUT");
  liczba.setAttribute("type", "number");
  liczba.setAttribute("placeholder", "Ilosc");
  liczba.setAttribute("value", 1);
  liczba.setAttribute("min",1);
  var doKoszyka = document.createElement("INPUT");
  doKoszyka.setAttribute("type", "button");
  doKoszyka.setAttribute("value", "Do koszyka");
  doKoszyka.setAttribute("name", M['id']);


  $(blokObraz).attr("src",M['obrazek']);
  blokNazwa.innerHTML = M['nazwa'];
  blokCeny.innerHTML = M['cena'] + " zł";

  $(blokTowaru).addClass('blokTowaru');
  $(blokNazwa).addClass('nazwa');
  $(blokObraz).addClass('Obraz');
  $(blokCeny).addClass('Cena');
  $(blokSpecyfikacja).addClass('Specyfikacja');
  $(liczba).addClass('Liczba');
  $(doKoszyka).addClass('doKoszyka');

  var ul = document.createElement('ul');
  var generacja = document.createElement('li');
  var firma = document.createElement('li');
  var taktowanie = document.createElement('li');
  var pojemnosc = document.createElement('li');
  var opoznienie = document.createElement('li');

  generacja.innerHTML = "Generacja : " + M["generacja"];
  ul.appendChild(generacja);
  firma.innerHTML = "Firma : " + M["firma"];
  ul.appendChild(firma);
  taktowanie.innerHTML = "Taktowanie : " + M["taktowanie"];
  ul.appendChild(taktowanie);
  pojemnosc.innerHTML = "Pojemnośc : " + M["pojemnosc"];
  ul.appendChild(pojemnosc);
  opoznienie.innerHTML = "Opóźnienie : " + M["opoznienie"];
  ul.appendChild(opoznienie);
  blokSpecyfikacja.innerHTML = ul.innerHTML;
  blokTowaru.prepend(blokCeny);

  blokTowaru.append(liczba);
  blokTowaru.append(doKoszyka);
  blokTowaru.prepend(blokObraz);
  blokTowaru.prepend(blokNazwa);
  blokTowaru.append(blokSpecyfikacja);
  return blokTowaru;
}
////////////////////////////////////////////////////////////////////////////////
function fWypiszMini(a){
    for(c in magazynTabela){
      if(magazynTabela[c]["id"] == koszyk[a].id){
        var blokTowaru = document.createElement("div");
        var blokNazwa = document.createElement("div");
        var usun = document.createElement("INPUT");
        usun.setAttribute("type", "button");
        usun.setAttribute("onclick", "usunZKoszykaMini(" + c + "," + a +")");
        usun.setAttribute("value", "usun");
        usun.setAttribute("id", a);
        var liczba = document.createElement("INPUT");
        liczba.setAttribute("type", "number");
        liczba.setAttribute("placeholder", "Ilosc");
        liczba.setAttribute("value", koszyk[a].ilosc);
        liczba.setAttribute("min",1);
        liczba.setAttribute("name","koszyk");
        blokNazwa.innerHTML = magazynTabela[c]['nazwa'];
        $(blokTowaru).addClass('blokTowaruMini');
        $(blokNazwa).addClass('nazwaMini');
        $(liczba).addClass('LiczbaMini');
        $(usun).addClass('btn');
        $(usun).addClass('usun');
        blokTowaru.append(usun);
        blokTowaru.append(liczba);
        blokTowaru.prepend(blokNazwa);
      }
  }
  var blokTowaruu = document.createElement("div");
  blokTowaruu.append(blokTowaru);
  return blokTowaruu;
}
////////////////////////////////////////////////////////////////////////////////
function wypisywanieAMD(co){
  wzorTablicaTowarow = [];
  ktoraKategoria = co;
  towaryDoWypisania = 0;
  strona = 1;
  document.getElementById("gdzie").innerHTML = "Strona " + strona;
  var blokTowaru = document.createElement("div");
  $("#towary").empty();
  tablicaTowarow  = [];
  switch(ktoraKategoria){
    case "procesor":
    $("#pojemnoscFkartgraficzne").hide();
    $("#rdzenieF").show();
    $("#watkiF").show();
    $("#pojemnoscFram").hide();
    $("#opoznieniaFram").hide();
    $("#btnFiltr").show();
      for(a in magazynTabela){
        if(magazynTabela[a]['firma'] == 'AMD' && magazynTabela[a]["typ"] == "procesor"){
          tablicaTowarow.push(magazynTabela[a]);
          wzorTablicaTowarow.push(magazynTabela[a]);
          zastepczaTablicaTowarow.push(magazynTabela[a]);
          towaryDoWypisania++;
        }
      }
      break;
    case "karta_graficzna":
    $("#pojemnoscFkartgraficzne").show();
    $("#rdzenieF").hide();
    $("#watkiF").hide();
    $("#pojemnoscFram").hide();
    $("#opoznieniaFram").hide();
    $("#btnFiltr").show();
      for(a in magazynTabela){
        if(magazynTabela[a]['firma'] == 'AMD' && magazynTabela[a]["typ"] == "karta_graficzna"){
          tablicaTowarow.push(magazynTabela[a]);
          wzorTablicaTowarow.push(magazynTabela[a]);
          zastepczaTablicaTowarow.push(magazynTabela[a]);
          towaryDoWypisania++;
        }
      }
      break;
  }
  jakieSortowanie();
  document.getElementById("towary").append(blokTowaru);
}
////////////////////////////////////////////////////////////////////////////////
function Wypisywanie(co,oCoChodzi,kategorie){
  wzorTablicaTowarow = [];
  towaryDoWypisania = 0;
  ktoraKategoria = kategorie;
  strona = 1;
  document.getElementById("gdzie").innerHTML = "Strona " + strona;
  var blokTowaru = document.createElement("div");
  $("#towary").empty();
  tablicaTowarow  = [];
  switch(kategorie){
    case "procesor":
      $("#pojemnoscFkartgraficzne").hide();
      $("#rdzenieF").show();
      $("#watkiF").show();
      $("#pojemnoscFram").hide();
      $("#opoznieniaFram").hide();
      $("#btnFiltr").show();
      break;
    case "karta_graficzna":
      $("#pojemnoscFkartgraficzne").show();
      $("#rdzenieF").hide();
      $("#watkiF").hide();
      $("#pojemnoscFram").hide();
      $("#opoznieniaFram").hide();
      $("#btnFiltr").show();
      break;
    case "RAM":
      $("#pojemnoscFkartgraficzne").hide();
      $("#rdzenieF").hide();
      $("#watkiF").hide();
      $("#pojemnoscFram").show();
      $("#opoznieniaFram").show();
      $("#btnFiltr").show();
      break;
  }
  for(a in magazynTabela){
    if(magazynTabela[a][oCoChodzi] == co){
      tablicaTowarow.push(magazynTabela[a]);
      wzorTablicaTowarow.push(magazynTabela[a]);
      zastepczaTablicaTowarow.push(magazynTabela[a]);
      towaryDoWypisania++;
    }
  }
  jakieSortowanie();
  document.getElementById("towary").append(blokTowaru);
}
////////////////////////////////////////////////////////////////////////////////
function WypisywanieNaStrony(){
  var blokTowaru = document.createElement("div");
  if(tablicaTowarow.length != 0){
    for(var a=0;a<naStroneTowarow && a+(strona-1)*naStroneTowarow<towaryDoWypisania;a++){
      switch(tablicaTowarow[a + (naStroneTowarow * (strona - 1))]["typ"]){
        case "karta_graficzna":
          blokTowaru.innerHTML += fKartyGraficzne(tablicaTowarow[a + towaryDoWypisania-(towaryDoWypisania-(strona-1)*naStroneTowarow)]).innerHTML;
          break;
        case "procesor":
          blokTowaru.innerHTML += fProcesory(tablicaTowarow[a + towaryDoWypisania-(towaryDoWypisania-(strona-1)*naStroneTowarow)]).innerHTML;
          break;
        case "RAM":
          blokTowaru.innerHTML += fram(tablicaTowarow[a + towaryDoWypisania-(towaryDoWypisania-(strona-1)*naStroneTowarow)]).innerHTML;
          break;
      }
    }
    document.getElementById("towary").append(blokTowaru);
  }else{
    $("#towary").empty();
    $("#towary").html("<h1>Nie ma takiego towaru.</h1>");
  }
}
