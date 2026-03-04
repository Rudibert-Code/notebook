// Display notes

let myNotes = ["hi"," banana", " apfel", " nö"];
let newNotes;

function renderNotes(){
    document.getElementById('notes-location').innerHTML = (`<p>${myNotes}</p>`)
}

function submitNotes(){
    newNotes = "";
    newNotes = document.getElementById('newNotes').value;
    myNotes.push = newNotes;
    renderNotes();
}



// Add notes
// Delete notes
// Archive notes