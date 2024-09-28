// Manejar la subida de estudios
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Mostrar mensaje de éxito al subir el archivo
    document.getElementById('uploadMessage').style.display = 'block';

    // Limpiar el formulario después de 3 segundos
    setTimeout(() => {
        document.getElementById('uploadMessage').style.display = 'none';
        document.getElementById('uploadForm').reset(); // Reiniciar el formulario
    }, 3000);
});
