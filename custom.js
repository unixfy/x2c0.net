// sidenav
$(document).ready(function() {
  $('.sidenav').sidenav();
});

// scrollspy
$(document).ready(function() {
  $('.scrollspy').scrollSpy({
    scrollOffset: 5
  });
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

// Scrolljacking!
$(function() {
  $.scrollify({
    section: ".fullscreen",
    sectionName: "name",
    interstitialSection: ".footer",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 5,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
  });
});
