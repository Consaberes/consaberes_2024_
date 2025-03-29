document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slider = document.querySelector(".slider ul");
  const images = document.querySelectorAll(".slider li");
  const totalImages = images.length;
  const buttons = document.querySelectorAll(".control-btn");
  const imageWidth = 800; // Ancho correcto de cada imagen

  // Ajustar el ancho del ul dinámicamente
  slider.style.width = `${totalImages * imageWidth}px`;

  function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    updateActiveButton();
  }

  function updateActiveButton() {
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[currentIndex].classList.add("active");
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
  }

  let autoSlideInterval = setInterval(autoSlide, 5000);

  document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
    autoSlideInterval = setInterval(autoSlide, 5000);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
    autoSlideInterval = setInterval(autoSlide, 5000);
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentIndex = index;
      updateSlider();
      autoSlideInterval = setInterval(autoSlide, 5000);
    });
  });

  updateActiveButton();
});

