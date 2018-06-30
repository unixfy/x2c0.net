// sidenav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// scrollspy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// TypedJS
$(window).on('load', function() {
  var typed = new Typed("#hello", {
    stringsElement: '#hellos',
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1000,
    fadeOutDelay: 1250,
    fadeOut: true,
    loop: true,
    loopCount: Infinity,
    autoInsertCss: true,
    smartBackspace: false,
  });
});
