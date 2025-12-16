$(document).ready(function () {
  ///////// ** main** /////////
  var mainSlider = new Swiper(".main-slider .swiper-container", {
    loop: false,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ///////// **category-section** /////////
  var categorySlider = new Swiper(".category-section .swiper-container", {
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 5.2,
        spaceBetween: 8,
      },
      767: {
        slidesPerView: 5.2,
        spaceBetween: 13,
      },
      1199: {
        slidesPerView: 7.2,
        spaceBetween: 13,
      },
    },
  });
  ///////// **bids-section** /////////
  var bidsSlider = new Swiper(".bids-section .swiper-container", {
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 2.1,
        spaceBetween: 12,
      },
      767: {
        slidesPerView: 3.2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4.2,
        spaceBetween: 15,
      },
    },
  });
  ///////// **product-section** /////////
  var productSlider = new Swiper(".product-section .swiper-container", {
    autoplay: false,
    breakpoints: {
      0: {
        slidesPerView: 2.1,
        spaceBetween: 12,
      },
      767: {
        slidesPerView: 3.2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4.2,
        spaceBetween: 15,
      },
    },
  });

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });

  // dark mode

  let darkmodeInput = $(".darkmode-input");
  let darkmodeIcon = $(".dark-mode-toggle__icon");

  function setDarkMode(isDark) {
    $("body").toggleClass("dark-mode", isDark);

    darkmodeInput.prop("checked", isDark);

    darkmodeIcon.toggleClass("dark-mode-toggle__icon--moon", !isDark);

    localStorage.setItem("dark-mode", isDark);
  }

  let isDark = localStorage.getItem("dark-mode") === "true";
  setDarkMode(isDark);

  darkmodeInput.on("change", function () {
    setDarkMode(this.checked);
  });
});
