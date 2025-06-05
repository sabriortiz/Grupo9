document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");
  const carousel = document.querySelector("[data-carousel]");
  const slides = carousel.querySelector("[data-slides]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      changeSlide(offset);
    });
  });

  function changeSlide(offset) {
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }

  // Avanzar automáticamente cada 3 segundos
  setInterval(() => {
    changeSlide(1);
  }, 4000);
});
