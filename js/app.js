$(function () {
  //**LOGO ACTIVE */
  $(".btn_toggler").click(function () {
    let logo = $("nav .navbarLogo");
    let navMenu = $("#myCustomNavbar ul");
    logo.toggleClass("activeLogo");
    navMenu.toggleClass("activeNavMenu");
  });

  //*BANNER STARTS SLICK
  $(".banner-slider").slick({
    arrows: false,
  });

  //*SERVICE SLIDER SLICK
  $(".servierSlider").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
