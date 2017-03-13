// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('PrimoitemCrtl',function($scope){
  $scope.titolo="YES";
  $scope.titolo1="OH YES";//le variabili con $scope sono visibili sulla pagina html
  $scope.titolo2="OOOHHH YEEEESSS!!!";
  $scope.listaarmi=
  [
    {
    id: "01",
    nome: "GAY IMPAZIENTE",
    descrizione:"Grande cappella di fuoco",
    slots:"4",
    image:"http://static.haisentito.it/haisentito/fotogallery/625X0/55457/scultura-fiammiferi-ghandi.jpg"
  },
  {
    id:"02",
    nome: "Bastone Allungati",
    descrizione:"Un bel bastone",
    slots:"infinito ma solo se lo tocchi",
    image:"http://i55.tinypic.com/11kgi68.gif"
  }];

  // $scope.nuova=[{
  //   id: "",
  //   nome:"",
  //   descrizione:"",
  //   slots:"",
  //   image:""
  // }]; anche senza questo funzione perche la variabile nuova automaticamente

  $scope.elimina= function(id, indice){
    $scope.listaarmi.splice(indice, 1);
  }
  $scope.stampa= function () {
    console.log($scope.ilmionome);
  }

  $scope.inserisci= function(){
    $scope.listaarmi.push($scope.nuova);
  }



// CREA UN OGGETTO ARMA E RIEMPILO CON I SEGUENTI DATI
/*
 * nome: "Ascia bipenne",
 * descrizione: "L’ascia bipenne è una scure a due lame, simbolo del potere minoico.",
 * slots : "3",
 * image: "http://khazalidgrungron.altervista.org/axes/05.png"
 */

//
});
