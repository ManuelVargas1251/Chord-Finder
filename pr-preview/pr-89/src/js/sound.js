// let preloaded = true

function preload() {
    let notes = []
    _notes.forEach((element, index) => {
        notes[index] = new Audio('src/sound/mp3/' + index + '.mp3')
        notes[index].preload = true
    })
    return notes
}

//plays note when pressed/clicked
function playNote(noteId, notes) {
    try {
        notes[noteId].play()
    }
    catch (error) {
        console.error(error)
    }
    return notes
}

exports.playNote = playNote
exports.preload = preload
