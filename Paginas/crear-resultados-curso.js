document.addEventListener('DOMContentLoaded', function() {
    // Simulación de obtención de competencias desde el servidor
    const competencias = [
        { id: 'C001', nombre: 'Competencia 1' },
        { id: 'C002', nombre: 'Competencia 2' },
        { id: 'C003', nombre: 'Competencia 3' }
    ];

    // Simulación de obtención de materias desde el servidor
    const materias = [
        { id: 'M001', nombre: 'Materia 1' },
        { id: 'M002', nombre: 'Materia 2' },
        { id: 'M003', nombre: 'Materia 3' }
    ];

    const competenciaSelect = document.getElementById('competenciaId');
    const materiaSelect = document.getElementById('materiaId');

    competencias.forEach(competencia => {
        const option = document.createElement('option');
        option.value = competencia.id;
        option.textContent = competencia.nombre;
        competenciaSelect.appendChild(option);
    });

    materias.forEach(materia => {
        const option = document.createElement('option');
        option.value = materia.id;
        option.textContent = materia.nombre;
        materiaSelect.appendChild(option);
    });
});

document.getElementById('resultadoCursoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resultadoCursoId = document.getElementById('resultadoCursoId').value;
    const resultadoCursoDescripcion = document.getElementById('resultadoCursoDescripcion').value;
    const competenciaId = document.getElementById('competenciaId').value;
    const materiaId = document.getElementById('materiaId').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!resultadoCursoId || !resultadoCursoDescripcion || !competenciaId || !materiaId) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación del resultado de aprendizaje del curso
    showSuccess('Resultado de Aprendizaje del Curso creado exitosamente.');
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
