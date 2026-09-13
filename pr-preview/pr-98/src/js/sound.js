// Preloads audio notes and provides functionality to play them
function preload() {
    return _notes.map((_, index) => {
        const note = new Audio('src/sound/mp3/' + index + '.mp3')
        note.preload = 'auto'  // Native HTML5 audio preload attribute
        return note
    })
}

// Plays a specific note from the preloaded notes array
function playNote(noteId, notes) {
    // Attempt to play the note and handle any potential errors
    try {
        // Play the note and catch any errors that occur during playback
        const playback = notes[noteId].play() 
        // If the play() method returns a promise, attach a catch handler to it
        if (playback && typeof playback.catch === 'function') {
            playback.catch(error => console.error(error))
        }
    } catch (error) {
        console.error(error)    // Log the error if playback fails
    }
    return notes
}
// Exports the preload and playNote functions for use in other modules
exports.preload = preload
exports.playNote = playNote