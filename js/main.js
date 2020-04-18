$(document).ready(function() {
  // ogni click sui div invia una richiesta AJAX che prende un numero random da 1 a 9
  $('.quadratini').on('click', function(){
      var theChosenOne = $(this);
      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {
          // Se il num ritornato è <6 il div diventa giallo
          if (data.response < 6){
            theChosenOne.addClass("giallo cliccato");
            theChosenOne.append('<h1>' + data.response + '</h1>');
            // Il numero ottenuto appare al centro del quadrato
          }
          // se è > di 5 il div diventa verde
          else {
            theChosenOne.addClass("verde cliccato");
            theChosenOne.append('<h1>' + data.response + '</h1>');
            // Il numero ottenuto appare al centro del quadrato
          }
        },
        error : function (richiesta,stato,errori) {
          console.log("nope");
        }
      });
    }
  )

  $('.quadratone').on("click", ".cliccato",
     function () {
       alert("Hai già cliccato questo quadrato");
  });
});
