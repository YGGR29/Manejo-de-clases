document.addEventListener('DOMContentLoaded', function() {
    // No se requieren datos dinámicos para la finalización del semestre
});

document.getElementById('finalizarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const archivoRespaldo = document.getElementById('archivoRespaldo').files[0];
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!fechaInicio || !fechaFin || !archivoRespaldo) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la finalización del semestre
    showSuccess('Semestre finalizado correctamente. Archivo de respaldo recibido.');
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
