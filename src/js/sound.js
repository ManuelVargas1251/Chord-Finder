console.log('sound-start');


var sound = new Howl({
    src: ['src/sound/mySound.mp3'],
    autoplay: true,
    onend: function () {
        console.log('Finished!');
    }
});

sound.play();


console.log('sound-end');