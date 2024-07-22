function inicio() {
    window.location.href = "index.html"
}

function institucion(){
    window.location.href = "institucion.html"
}

function organigrama() {
    window.location.href = "organigrama.html"  
}


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
