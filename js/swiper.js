let swiper1 = new Swiper(".mySwiper_one", {
  navigation: {
    nextEl: '.swiper-button-next_swiper1',
    prevEl: '.swiper-button-prev_swiper1'
  },
  pagination: {
    el: '.swiper-pagination_swiper1',
    clickable: true
  },

  slidesPerView: 4,
  spaceBetween: 50,

  watchOverflow: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 80
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 80,
    }
  }
});
let swiper2 = new Swiper(".mySwiper_two", {
  navigation: {
    nextEl: '.swiper-button-next_swiper2',
    prevEl: '.swiper-button-prev_swiper2'
  },
  pagination: {
    el: '.swiper-pagination_swiper2',
    clickable: true
  },

  slidesPerView: 4,
  spaceBetween: 50,

  watchOverflow: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 80
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 45,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 80,
    }
  }
});