let subtemaCounter = 1;

document.addEventListener('DOMContentLoaded', function() {
    // No se requieren datos dinámicos para la creación de unidades temáticas y subtemas
});

function agregarSubtema() {
    const subtemasContainer = document.getElementById('subtemasContainer');

    const subtemaItem = document.createElement('div');
    subtemaItem.classList.add('subtema-item');
    
    const inputSubtema = document.createElement('input');
    inputSubtema.type = 'text';
    inputSubtema.name = `subtema${subtemaCounter}`;
    inputSubtema.placeholder = 'Nombre del Subtema';
    inputSubtema.required = true;
    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.type = 'button';
    btnEliminar.addEventListener('click', function() {
        subtemasContainer.removeChild(subtemaItem);
    });

    subtemaItem.appendChild(inputSubtema);
    subtemaItem.appendChild(btnEliminar);
    
    subtemasContainer.appendChild(subtemaItem);
    
    subtemaCounter++;
}

document.getElementById('unidadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const unidadNombre = document.getElementById('unidadNombre').value;
    const unidadDescripcion = document.getElementById('unidadDescripcion').value;
    const subtemas = [];

    // Obtener nombres de los subtemas
    const subtemasInputs = document.querySelectorAll('#subtemasContainer input[type="text"]');
    subtemasInputs.forEach(function(input) {
        subtemas.push(input.value);
    });

    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (!unidadNombre || !unidadDescripcion || subtemas.length === 0) {
        showError('Todos los campos son obligatorios, incluyendo al menos un subtema.');
        return;
    }

    // Aquí puedes añadir la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST al servidor

    // Simulación de éxito en la creación de la unidad temática y subtemas
    showSuccess('Unidad Temática y Subtemas creados exitosamente.');
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
