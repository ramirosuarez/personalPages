document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.pushpin');
  var instances = M.Pushpin.init(elems, {
     offset:500
     
  });
});



/////////////////////
// Es la funcion para hacer scrooll sobre la misma paguina

  $(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1100);
      return false;
    });
  });