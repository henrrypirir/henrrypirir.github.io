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


  if  ($(window).width() > 1022) {
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

  }

      if  ($(window).width() > 621 && $(window).width() < 1022) {
        $('.bx-slider').bxSlider({
          minSlides : 2,
          maxSlides : 2,
          moveSlides: 1,
          slideMargin: 10,
          slideWidth : 380,
          pager: false,
          nextText: "<i class='fas fa-chevron-right fa-2x'></i>",
          prevText: "<i class='fas fa-chevron-left fa-2x'></i>"
        });
      }

      if ($(window).width() < 620) {
        $('.bx-slider').bxSlider({
          pager: false,
          nextText: "<i class='fas fa-chevron-right fa-2x'></i>",
          prevText: "<i class='fas fa-chevron-left fa-2x'></i>"
        });
      }

});
