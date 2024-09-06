// Mostrar las imágenes de la bienvenida
let currentIndex = 0;
const images = document.querySelectorAll('.image');

function showImage(index) {
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.images').style.transform = `translateX(${offset}%)`;
}
function nextImage() {
    showImage(currentIndex + 1);
}
function prevImage() {
    showImage(currentIndex - 1);
}
// Cambiar automáticamente cada 3 segundos
setInterval(nextImage, 7000);


/* Funcion que Desabilita el Scroll para el Menu Movil*/
const btnNav = document.getElementById('btn_nav');
btnNav.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = 'hidden'; // Deshabilitar el desplazamiento
    } else {
        document.body.style.overflow = ''; // Habilitar el desplazamiento
    }
});