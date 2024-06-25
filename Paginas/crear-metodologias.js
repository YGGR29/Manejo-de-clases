document.addEventListener('DOMContentLoaded', function() {
    // No se requieren datos dinámicos para la creación de metodologías
});

document.getElementById('metodologiaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const metodologiaId = document.getElementById('metodologiaId').value;
    const metodologiaNombre = document.getElementById('metodologiaNombre').value;
    const metodologiaDescripcion = document.getElementById('metodologiaDescripcion').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!metodologiaId || !metodologiaNombre || !metodologiaDescripcion) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación de la metodología de realimentación
    showSuccess('Metodología de Realimentación creada exitosamente.');
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
