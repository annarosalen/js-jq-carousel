// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$("document").ready(function(){

// per andare avanti

  function carouselNext(){

    var imgActive = $('img.active');

    imgActive.removeClass('active');

    if(imgActive.hasClass('last')){
      $("img.first").addClass('active');
    }else{
      imgActive.next('img').addClass('active');
    }

  }

  $('.next').click(carouselNext);



  // per tornare indietro

  function carouselPrev(){
    var imgActive = $('img.active');

    imgActive.removeClass('active');

    if(imgActive.hasClass('first')){
      $("img.last").addClass('active');
    }else{
      imgActive.prev('img').addClass('active');
    }

  }

  $('.prev').click(carouselPrev);



// inserisco arrows

  // metodo tramite jquery
  $(document).keydown(function(event){

    if(event.which === 39){
      carouselNext();
    }
    if(event.which === 37){
      carouselPrev();
    }
  });


  // metodo tramite js vanilla
  // document.body.addEventListener('keydown', function(event) {
  //
  //   var key = event.key;
  //   switch (key) {
  //     // se freccia sinistra
  //     case "ArrowLeft":
  //       carouselPrev();
  //     break;
  //     // se freccia destra
  //     case "ArrowRight":
  //       carouselNext();
  //     break;
  //   }
  //
  // });


}); //fine document ready
