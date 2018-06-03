createjs.FlashAudioPlugin.swfPath = "../src/soundjs/flashaudio";
createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", this.loadHandler, this);
createjs.Sound.registerSound("path/to/mySound.ogg", "sound");
function loadHandler(event) {
    // This is fired for each sound that is registered.
    var instance = createjs.Sound.play("sound");  // play using id.  Could also use full source path or event.src.
    instance.on("complete", this.handleComplete, this);
    instance.volume = 0.5;
}