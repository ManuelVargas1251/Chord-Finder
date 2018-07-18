//const Howl = require('').Howl
//let Howl = require('./external/Howler.min').Howl

let preloaded = false

preload()

function preload() {
    
    //new Howl();
    //preloading notes files
    for (i = 0; i < 12; i++) {
        notes[i] = new Howl({
            src: [
                'src/sound/mp3/' + i + '.mp3',
                'src/sound/wav/' + i + '.wav'
            ],
            loop: false,
            preload: true
        });
        //console.log('notes:' + notes[0])
    }
    return true
}

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
