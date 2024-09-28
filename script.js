// Función para hacer scroll a una sección específica
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Enviar mensaje de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    document.getElementById('successMessage').style.display = 'block'; // Mostrar el mensaje de éxito
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('contactForm').reset();
    }, 3000);
});
