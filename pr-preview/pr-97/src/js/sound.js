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
    try {
        notes[noteId].play()    // Attempt to play the specified note
    } catch (error) {
        console.error(error)    // Log the error if playback fails
    }
    return notes
}

exports.preload = preload
exports.playNote = playNote