function playNote(NoteId) {
    let sound = new Howl({
        src: ['src/sound/' + NoteId + '.mp3'],
        onend: function () {
            console.log('Finished!');
        },
        onloaderror: function () {
            console.error('no sound file found')
        }
    }).play()
}
