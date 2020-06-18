function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

});

$(window).resize(function() {
  getAnimation();
});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {

  getAnimation();

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

});