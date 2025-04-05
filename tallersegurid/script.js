
/*
let slideIndex = 1;
let slides = document.querySelectorAll('.slide');
let indicadores = document.querySelectorAll('.indicadores span');

function showSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].classList.remove('active');
    }
    slides[slideIndex-1].classList.add('active');
    indicadores[slideIndex-1].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

// Inicializa el slider
showSlide(slideIndex);

*/


// pone automatico el slider

let autoplayInterval = null;
let slideIndex = 1;
let slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < document.querySelectorAll('.indicadores span').length; i++) {
        document.querySelectorAll('.indicadores span')[i].classList.remove('active');
    }
    slides[slideIndex-1].classList.add('active');
    document.querySelectorAll('.indicadores span')[slideIndex-1].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function startAutoplay(interval) {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        nextSlide();
    }, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.botones button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});
