let notes = []

//preloading notes files
for (i = 0; i < 12; i++) {
    notes[i] = new Howl({
        src: ['src/sound/' + i + '.wav'],
        loop: false,
        preload: true
    });
    console.warn('notes:' + notes[0])
}

//plays note when pressed/clicked
function playNote(NoteId) {
    notes[NoteId].play()
    console.log('sound: ' + sound)
}
