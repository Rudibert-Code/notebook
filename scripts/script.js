// Display notes

let myNotes = ["hi"," banana", " apfel", " nö"];
let newNotes;
let noteAdded = false;
let addedNoteIndex;

function initFunction(){
    document.addEventListener("keyup", processKeyEntered);
}

function processKeyEntered(key){
    if (key.key == "Enter") {
        submitNotes()
    }
}

function renderNotes(){
    initFunction();
    if (noteAdded == true) {
        const note = myNotes[addedNoteIndex];
        document.getElementById('notes-location').innerHTML += `<p><a href="#" onclick="deleteNote(${addedNoteIndex})">${note}</a></p>`; 
        noteAdded = false; 
    } else {
        for (let i = 0; i < myNotes.length; i++) {
            const note = myNotes[i];
            document.getElementById('notes-location').innerHTML += `<p><a href="#" onclick="deleteNote(${i})">${note}</a></p>`;
        } 
    }
}

function submitNotes(){
    newNotes = "";
    newNotes = document.getElementById('newNotes').value;
    myNotes.push(newNotes);
    addedNoteIndex = myNotes.length;
    addedNoteIndex--
    noteAdded = true;
    document.getElementById('newNotes').value = "";
    renderNotes();
}

function deleteNote(elementLocation){
    myNotes.splice(elementLocation, 1);
    document.getElementById('notes-location').innerHTML = ""; 
    renderNotes();
}



// Add notes
// Delete notes
// Archive notes