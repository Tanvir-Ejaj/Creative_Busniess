$(function () {

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Extra button part start

  $(".extra-btn").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  // Extra button part end

  // scroll part start

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 5) {
      $(".navbar").addClass("nav-bg");
    } else {
      $(".navbar").removeClass("nav-bg");
    }

    if (scrolling > 5) {
      $(".extra-btn").fadeIn(200);
    } else {
      $(".extra-btn").fadeOut(200);
    }
  });

  $(".show").on("click", function () {
    $(".sidebar").css("left", "0px");
  });
  $(".close").on("click", function () {
    $(".sidebar").css("left", "-100%");
  });

  $(".slide-1").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fa-solid fa-caret-right arrow-right"></i>',
    prevArrow: '<i class="fa-solid fa-caret-left arrow-left"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoPlay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoPlay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoPlay: true,
        },
      },
    ],
  });
});
