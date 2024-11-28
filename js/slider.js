const swiper = new Swiper(".swiper-container", {
    loop: true, // Enables infinite looping of slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Pagination dots are clickable
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });