"use strict";
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiperSlide = new Swiper(".mySwiperSlide", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-paginationSlide",
    clickable: true,
  },
});
