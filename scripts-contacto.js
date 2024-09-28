// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Mostrar mensaje de éxito después del envío
    document.getElementById('successMessage').style.display = 'block';

    // Limpiar el formulario después de 3 segundos
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('contactForm').reset(); // Reiniciar el formulario
    }, 3000);
});
