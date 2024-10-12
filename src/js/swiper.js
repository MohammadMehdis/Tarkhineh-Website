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
    el: ".swiper-paginationSlide2",
    clickable: true,
  },
});

document
  .getElementById("go-to-last-slide")
  .addEventListener("click", function () {
    swiperSlide.slideTo(swiperSlide.slides.length - 1);
  });
``;

var swiperSlide2 = new Swiper(".mySwiperSlide2", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-paginationSlide",
    clickable: true,
  },
});

document
  .getElementById("go-to-last-slide2")
  .addEventListener("click", function () {
    swiperSlide2.slideTo(swiperSlide2.slides.length - 1);
  });
``;
var swiperSlide3 = new Swiper(".mySwiperSlide3", {
  slidesPerView: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-paginationSlide",
    clickable: true,
  },
});

document
  .getElementById("go-to-last-slide3")
  .addEventListener("click", function () {
    swiperSlide3.slideTo(swiperSlide3.slides.length - 1);
  });
``;

