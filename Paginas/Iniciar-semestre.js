document.getElementById('semesterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const teachersFile = document.getElementById('teachersFile').files[0];
    const groupsFile = document.getElementById('groupsFile').files[0];
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!startDate || !endDate || !teachersFile || !groupsFile) {
        showError('Todos los campos son obligatorios.');
        return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
        showError('La fecha de inicio debe ser anterior a la fecha de finalización.');
        return;
    }

    // Aquí puedes añadir la lógica para procesar los archivos CSV y enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación del semestre
    showSuccess('Semestre creado exitosamente.');
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
