document.addEventListener('DOMContentLoaded', function() {
    // No se requieren datos dinámicos para la creación de instrumentos
});

document.getElementById('instrumentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const instrumentoId = document.getElementById('instrumentoId').value;
    const instrumentoNombre = document.getElementById('instrumentoNombre').value;
    const instrumentoDescripcion = document.getElementById('instrumentoDescripcion').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!instrumentoId || !instrumentoNombre || !instrumentoDescripcion) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación del instrumento de evaluación
    showSuccess('Instrumento de Evaluación creado exitosamente.');
});

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.display = 'block';
}
