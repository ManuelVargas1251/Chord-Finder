// converts user inputted chord from array of ids to literal note name array
function getNoteChord(idChord) {
    // return array of literal note names
    return idChord.map((element) => {
        return _notes[element]
    })
}

function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value);
}
// module.exports = getNoteChord
