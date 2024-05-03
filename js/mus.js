// sec1 swiper
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });