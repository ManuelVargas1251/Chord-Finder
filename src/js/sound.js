let notes = []

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
    console.log('notes:' + notes[0])
}

//plays note when pressed/clicked
function playNote(NoteId) {
    notes[NoteId].play()
    return notes[NoteId]
}