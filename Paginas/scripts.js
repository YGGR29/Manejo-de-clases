document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    // Validación básica de inicio de sesión (simulado)
    if (email === 'Juan@ufps.edu.co' && password === '1234') {
        // Inicio de sesión exitoso, redireccionar al menú
        window.location.href = "menu.html";
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        showError('Credenciales incorrectas. Inténtelo de nuevo.');
    }
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
