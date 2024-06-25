document.addEventListener('DOMContentLoaded', function() {
    const planClaseTable = document.getElementById('planClaseTable').getElementsByTagName('tbody')[0];
    const addRowButton = document.getElementById('addRowButton');

    const planClaseData = [
        {
            resultado: 'Resultado 1',
            evidencia: 'Evidencia 1',
            instrumento: 'Instrumento 1',
            valor: '10%',
            semanaDesarrollo: 'Semana 1',
            semanaRealimentacion: 'Semana 2',
            metodologia: 'Metodología 1',
            corte: 'Corte 1'
        },
        // Puedes añadir más filas iniciales aquí
    ];

    function renderTable() {
        planClaseTable.innerHTML = '';
        planClaseData.forEach((fila, index) => {
            const row = planClaseTable.insertRow();
            row.insertCell(0).textContent = fila.resultado;
            row.insertCell(1).textContent = fila.evidencia;
            row.insertCell(2).textContent = fila.instrumento;
            row.insertCell(3).textContent = fila.valor;
            row.insertCell(4).textContent = fila.semanaDesarrollo;
            row.insertCell(5).textContent = fila.semanaRealimentacion;
            row.insertCell(6).textContent = fila.metodologia;
            row.insertCell(7).textContent = fila.corte;
            const actionsCell = row.insertCell(8);
            actionsCell.appendChild(createEditButton(index));
            actionsCell.appendChild(createDeleteButton(index));
        });
    }

    function createEditButton(index) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editRow(index));
        return editButton;
    }

    function createDeleteButton(index) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteRow(index));
        return deleteButton;
    }

    function addRow() {
        const newFila = {
            resultado: 'Nuevo Resultado',
            evidencia: 'Nueva Evidencia',
            instrumento: 'Nuevo Instrumento',
            valor: '0%',
            semanaDesarrollo: 'Semana X',
            semanaRealimentacion: 'Semana Y',
            metodologia: 'Nueva Metodología',
            corte: 'Nuevo Corte'
        };
        planClaseData.push(newFila);
        renderTable();
    }

    function editRow(index) {
        const fila = planClaseData[index];
        const newResultado = prompt('Editar Resultado de Aprendizaje:', fila.resultado);
        if (newResultado !== null) {
            fila.resultado = newResultado;
            renderTable();
        }
    }

    function deleteRow(index) {
        if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
            planClaseData.splice(index, 1);
            renderTable();
        }
    }

    addRowButton.addEventListener('click', addRow);

    renderTable();
});
