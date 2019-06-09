var tablicaTowarow = new Array();
var wzorTablicaTowarow = new Array();
var zastepczaTablicaTowarow = new Array();
var magazynTabela = new Array();//towary
var strona = 1;
var naStroneTowarow = 4;
var towaryDoWypisania = 0;
var ktoraKategoria = "";
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











