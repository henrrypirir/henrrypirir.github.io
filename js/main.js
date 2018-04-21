$(function() {
  $('#main-menu a[href*="#"]:not([href="#"]), #back-to-top, .down').click(function() {
    $( "#menu-bar" ).prop( "checked", false );
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  $('.bx-slider').bxSlider({
    minSlides : 4,
    maxSlides : 4,
    moveSlides: 1,
    slideMargin: 10,
    slideWidth : 380,
    pager: false,
    nextText: "<i class='fas fa-chevron-right fa-2x'></i>",
    prevText: "<i class='fas fa-chevron-left fa-2x'></i>"
  });

});
