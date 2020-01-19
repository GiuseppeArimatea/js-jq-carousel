// implementate la funzionalità slider.
// Se clicchiamo sulle icone next e prev andiamo avanti o indietro con le visualizzazioni. Il giro deve ripartire se siamo sull'ultima o la prima.
// I cerchietti devono cambiare colore contemporaneamente.


$(document).ready( // eseguiamo il documento dopo il caricamento del doom
  function () {
    $('.next').click( //assegnamo "click" a .next
      function () {
        clickNext(); // richiamiamo la funzione clicknext
      }
    );

    $('.prev').click( //assegnamo "click" a prev
      function () {
        clickPrev(); // richiamiamo la funzione clickPrev
      }
    );
  }
);




function clickNext() {
  var imageActive = $('img.active'); // variabile img corrente
  var imageNext = imageActive.next(); // variabile prossima immagine
  var circleActive = $('i.active') // variabile circle corrente
  var circleNext = circleActive.next(); // prossimo cerchio

  if (imageActive.hasClass('last') == true) { // Se imageActive ha la classa last "l ultima immagine"
    imageActive.removeClass('active'); // allora rimuoviamo la classe
    $('img.first').addClass('active'); // e gli assegniamo la prima
    circleActive.removeClass('active'); // stessa cosa per il cerchio
    $('i.first').addClass('active');
  } else {
    imageActive.removeClass('active');
    imageNext.addClass('active');
    circleActive.removeClass('active');
    circleNext.addClass('active');
  }
}

function clickPrev() {
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  var circleActive = $('i.active') //
  var circlePrev = circleActive.prev();


  if (imageActive.hasClass('first') == true) { // Se imageActive è la prima allora la rimuoviamo e andiamo a mettererla sull'ultima
    imageActive.removeClass('active');
    $('img.last').addClass('active');
    circleActive.removeClass('active');
    $('i.last').addClass('active');
  } else {
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
