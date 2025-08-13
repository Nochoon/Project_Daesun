let swipers = [];

window.onload = () => {
  swipers = new Swiper(".section-03-slide", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
