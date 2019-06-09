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
  switch(document.getElementById("selectorKategori").value){
    case "W"://wszystko
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
  jakieSortowanie();
}

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

function ileNaStronie(){
  naStroneTowarow = document.getElementById("ileNaStronie").value;
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