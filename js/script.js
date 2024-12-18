function addFieldEffect(columnId) {
    // Trova la colonna in cui aggiungere il nuovo campo
    const column = document.getElementById(columnId);

    // Crea un nuovo elemento HTML per il campo "Field Effect"
    const newFieldEffect = document.createElement('div');
    newFieldEffect.className = 'field-effect';
    newFieldEffect.innerHTML = `
        <div class="name-turns">
            <input type="text" placeholder="Name">
            <select name="turns_global">
                <option>Indefinite</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
        </div>
        <div class="description">
            <textarea placeholder="Description"></textarea>
        </div>
        <button class="remove-button" onclick="removeFieldEffect(this)">Remove</button>
    `;

    // Aggiunge il nuovo campo alla colonna prima del pulsante "Add Field Effect"
    column.insertBefore(newFieldEffect, column.querySelector('.add-button'));
}

function removeFieldEffect(button) {
    // Trova il contenitore del campo "Field Effect" associato al pulsante
    const fieldEffect = button.parentElement;

    // Rimuovi il campo "Field Effect" dal suo genitore
    fieldEffect.remove();
}
