console.log('sound-start');


var soundID = "Thunder"

function loadSound() {
    createjs
        .Sound
        .registerSound("../sound/mySound.mp3", soundID)
}


function playSound() {
    createjs
        .Sound
        .play(soundID)
}




















//createjs.FlashAudioPlugin.swfPath = "src/soundjs/flashaudio";
/*
createjs
    .Sound
    .registerPlugins([
        createjs.WebAudioPlugin,
        createjs.FlashAudioPlugin
    ]);

createjs
    .Sound
    .alternateExtensions = ["mp3"];

createjs
    .Sound
    .on("fileload", this.loadHandler, this);

createjs
    .Sound
    .registerSound("src/sound/mySound.wav", "sound", 2);









function loadHandler(event) {
    // This is fired for each sound that is registered.
    var instance = createjs.Sound.play("sound");  // play using id.  Could also use full source path or event.src.
    instance.on("complete", this.handleComplete, this);
    instance.volume = 0.5;
}
*/
console.log('sound-end');