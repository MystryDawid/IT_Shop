$("[type='number']").keypress(function(e){
    this.value = parseInt(this.value);
});

$(document).on( 'click', '.LiczbaMini', function(){
  event.stopPropagation();
  koszyk[$(this).siblings()[1].id].ilosc = this.value;
  wyswietlanieKoszykaMini();
  dodawanieStorage(koszyk[$(this).siblings()[1].id]);
});

$(document).on( 'click', '.doKoszyka', function(){
   if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        event.stopPropagation();
    }
  doKoszyka(this.name,$( "input[name=" + this.name + "]" ).prev()[0].value);
});










