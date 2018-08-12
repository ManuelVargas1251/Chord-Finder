// const Howl = require('Howl')
//let Howl = require('./external/Howler.min').Howl

let preloaded = true





//plays note when pressed/clicked
function playNote(NoteId, notes) {
    if (preloaded != undefined) {
        try {
            notes[NoteId].play()
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.log('not preloaded')
    }
    return notes[NoteId]
}

exports.playNote = playNote
