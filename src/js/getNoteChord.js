// converts user inputted chord 
// from array of ids to literal note name array
// return array of literal note names
function getNoteChord(idChord) {
    return idChord
        .map((element) => {
            return _notes[element]
        })
}

exports.getNoteChord = getNoteChord

