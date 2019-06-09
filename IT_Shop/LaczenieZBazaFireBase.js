// Initialize Firebase
var config = {
  apiKey: "AIzaSyBjeGe_mMca9fArKOzxnuAxncfrMIGch80",
  authDomain: "sklepik-7c097.firebaseapp.com",
  databaseURL: "https://sklepik-7c097.firebaseio.com",
  projectId: "sklepik-7c097",
  storageBucket: "sklepik-7c097.appspot.com",
  messagingSenderId: "938705711019"
};
firebase.initializeApp(config);
database = firebase.database();

////////////////////////////////////////////////////////////////////////////////
function pobieranieZBazyWszystkiego(){
  var ref  = database.ref();
  ref.on('value', wyswietlanieWyszystkiego, errData);
}
////////////////////////////////////////////////////////////////////////////////
function errData(err){
  console.log(err);
}











