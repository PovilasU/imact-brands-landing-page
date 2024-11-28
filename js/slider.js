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



  document.querySelectorAll(".faq__question").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        button.querySelector(".faq__arrow").innerHTML = "&#9650;";
      } else {
        answer.style.maxHeight = 0;
        button.querySelector(".faq__arrow").innerHTML = "&#9660;";
      }
    });
  });