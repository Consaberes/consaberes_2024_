let currentIndex = 0;
const images = document.querySelectorAll('.slider li');
const totalImages = images.length;

function updateSlider() {
    const newMargin = -currentIndex * 100; // Calcula el nuevo margen
    document.querySelector('.slider ul').style.marginLeft = `${newMargin}%`;
}

// Función para avanzar automáticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}

// Cambiar de imagen automáticamente cada 5 segundos
let autoSlideInterval = setInterval(autoSlide, 5000);

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Detiene la auto-animación al hacer clic
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
    autoSlideInterval = setInterval(autoSlide, 5000); // Reinicia la auto-animación
});

document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Detiene la auto-animación al hacer clic
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
    autoSlideInterval = setInterval(autoSlide, 5000); // Reinicia la auto-animación
});