function playNote(NoteId) {
    let sound = new Howl({
        src: ['src/sound/' + NoteId + '.wav'],
        loop: false,
        onend: function () {
            console.log('Finished!');
        },
        onloaderror: function () {
            console.error('no sound file found')
        }
    }).play()

    console.log('sound: ' + sound)
}
