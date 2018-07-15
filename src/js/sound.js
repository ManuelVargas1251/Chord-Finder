var notes = []

for (i = 0; i < 12; i++) {
    notes[i] = new Howl({
        src: ['src/sound/' + i + '.wav'],
        loop: false,
        preload: true
    });
    console.warn('notes:' + notes[0])
}

function playNote(NoteId) {
    // let sound = new Howl({
    //     src: ['src/sound/' + NoteId + '.wav'],
    //     loop: false,
    //     onend: function () {
    //         console.log('Finished!');
    //     },
    //     onloaderror: function () {
    //         console.error('no sound file found')
    //     }
    // }).play()

    notes[NoteId].play()

    console.log('sound: ' + sound)
}
