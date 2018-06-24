function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value);
}
module.exports = getNoteId
