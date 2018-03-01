// converts user inputted chord from array of id to literal note name array
function getNoteChord(idChord) {

    let noteChord = []

    // for each element in the id chord
    // save the literal note in a new array
    idChord.forEach(function(element, i) {
        noteChord[i] = _notes[element]
    })

    return noteChord
}
module.exports = getNoteChord;