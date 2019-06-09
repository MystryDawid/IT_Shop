$(document).ready(function() {
  $(".podKategorie").mouseover(function(){
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

function srodkowanieKoszyka(){
  $("#koszyk").css({top: 100, left: window.innerWidth/2 - $("#koszyk").width()/2});
}

function przejdzDoKoszyk(){
  wyswietlanieKoszykaMini();
  $("#koszyk").show();
  $("#blury").show();  
}







