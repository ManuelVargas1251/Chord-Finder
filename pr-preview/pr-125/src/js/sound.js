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
        const playback = notes[noteId].play()
        if (playback && typeof playback.catch === 'function') {
            playback.catch(error => console.error(error))
        }
    } catch (error) {
        console.error(error)    // Log the error if playback fails
    }
    return notes
}
module.exports = { preload, playNote }