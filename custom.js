// sidenav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// TypedJS
$(window).on('load', function() {
  var typed = new Typed("#hello", {
    stringsElement: '#hellos',
    typeSpeed: 75,
    startDelay: 1000,
    backSpeed: 75,
    backDelay: 2000,
    loop: true,
    loopCount: Infinity,
    autoInsertCss: false,
    smartBackspace: false,
  });
});
