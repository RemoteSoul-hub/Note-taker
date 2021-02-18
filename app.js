let submit = document.getElementById('submit');
let note = document.getElementById('field');
let table = document.getElementById('notes');
// Event listener to Submit click button

submit.addEventListener('click', addNote);

// Function to add text to table block
function addNote(e) {
 e.preventDefault();
    let note = document.getElementById('field').value;
    let row = table.insertRow(1);
    let cell = row.insertCell(0);
    cell.innerHTML = note;
}

// two elements per row only


// CSS for the tables / flex / grid 

// Event 