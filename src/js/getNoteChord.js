// Convert user-input chord IDs to literal note names.
function getNoteChord(idChord) {
    return idChord.map(noteId => _notes[noteId])
}

exports.getNoteChord = getNoteChord