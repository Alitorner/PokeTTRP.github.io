function addFieldEffect(columnId) {
    // Trova la colonna in cui aggiungere il nuovo campo
    const column = document.getElementById(columnId);

    // Crea un nuovo elemento HTML per il campo "Field Effect"
    const newFieldEffect = document.createElement('div');
    newFieldEffect.className = 'field-effect';
    newFieldEffect.innerHTML = `
        <div class="name-turns">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Turns">
        </div>
        <div class="description">
            <textarea placeholder="Description"></textarea>
        </div>
    `;

    // Aggiunge il nuovo campo alla colonna
    column.insertBefore(newFieldEffect, column.querySelector('.add-button'));
}