function load() {
    //move to dom process
    var sound = new Howl({
        src: [
            'src/sound/0.wav',
            'src/sound/1.wav',
            'src/sound/2.wav',
            'src/sound/3.wav',
            'src/sound/4.wav',
            'src/sound/5.wav',
            'src/sound/6.wav',
            'src/sound/7.wav',
            'src/sound/8.wav',
            'src/sound/9.wav',
            'src/sound/10.wav',
            'src/sound/11.wav'
        ],
        preload: true,
        loop: false,
        onend: function () {
            console.log('Finished!');
        },
        onloaderror: function () {
            console.error('no sound file found')
        }
    })

    let playNote = (NoteId) => {
        let sound = new Howl({
            src: ['src/sound/' + NoteId + '.wav'],
        }).play()
        console.log('sound: ' + sound)
    }
    
}



module.exports = load