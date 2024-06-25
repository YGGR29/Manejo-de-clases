document.addEventListener('DOMContentLoaded', function() {
    const competenciaSelect = document.getElementById('competenciaId');

    // Simulación de obtención de competencias desde el servidor
    const competencias = [
        { id: 'C001', nombre: 'Competencia 1' },
        { id: 'C002', nombre: 'Competencia 2' },
        { id: 'C003', nombre: 'Competencia 3' }
    ];

    competencias.forEach(competencia => {
        const option = document.createElement('option');
        option.value = competencia.id;
        option.textContent = competencia.nombre;
        competenciaSelect.appendChild(option);
    });
});

document.getElementById('resultadoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resultadoId = document.getElementById('resultadoId').value;
    const resultadoDescripcion = document.getElementById('resultadoDescripcion').value;
    const competenciaId = document.getElementById('competenciaId').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!resultadoId || !resultadoDescripcion || !competenciaId) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación del resultado de aprendizaje
    showSuccess('Resultado de Aprendizaje creado exitosamente.');
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
