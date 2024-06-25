document.getElementById('competenciaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const competenciaId = document.getElementById('competenciaId').value;
    const competenciaNombre = document.getElementById('competenciaNombre').value;
    const competenciaDescripcion = document.getElementById('competenciaDescripcion').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!competenciaId || !competenciaNombre || !competenciaDescripcion) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación de la competencia
    showSuccess('Competencia creada exitosamente.');
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
