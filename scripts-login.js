// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Redirigir directamente al perfil sin validación
    window.location.href = "perfil.html";
});
