// Animación de desplazamiento para que los elementos sean visibles al hacer scroll
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        if (sectionPosition < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Formulario de contacto (agregar validación)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
});
