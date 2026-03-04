// Display notes

let myNotes = ["hi"," banana", " apfel", " nö"];
let newNotes;

function renderNotes(newNoteIndex){
        if (newNoteIndex > 0) {
            newNoteIndex--
            const note = myNotes[newNoteIndex];
            document.getElementById('notes-location').innerHTML += `<p><a href="#" onclick="deleteNote(${newNoteIndex})">${note}</a></p>`;   
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
    let newIndex = myNotes.length;
    renderNotes(newIndex);
}

function deleteNote(elementLocation){
    myNotes.splice(elementLocation, 1);
    renderNotes();
}



// Add notes
// Delete notes
// Archive notes