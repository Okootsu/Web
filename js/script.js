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




/*
// Menu Movil
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const isVisible = menu.style.display === 'flex';
    
    menu.style.display = isVisible ? 'none' : 'flex';
    
    // Deshabilitar o habilitar el desplazamiento
    document.body.style.overflow = isVisible ? 'auto' : 'hidden';
}
*/




function toggleMenu() {
    const menu = document.querySelector('.menu');
    const isVisible = menu.classList.contains('show');
    
    if (isVisible) {
        menu.classList.remove('show');
        // Deshabilitar el desplazamiento
        document.body.style.overflow = 'auto';
    } else {
        menu.classList.add('show');
        // Habilitar el desplazamiento
        document.body.style.overflow = 'hidden';
    }
}

const btnNav = document.getElementById('btn_nav');
btnNav.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = 'hidden'; // Deshabilitar el desplazamiento
    } else {
        document.body.style.overflow = ''; // Habilitar el desplazamiento
    }
});