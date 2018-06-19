console.log('sound-start');


function playNote(newNoteId) {
    let sound = new Howl({
        src: ['src/sound/' + newNoteId +'.mp3'],
        onend: function () {
            console.log('Finished!');
        }
    }).play();
}

console.log('sound-end');