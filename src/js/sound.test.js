let playNote = require('./sound').playNote
const noteObject = {
    "_autoplay": false,
    "_duration": 0,
    "_endTimers": {},
    "_format": undefined,
    "_html5": false,
    "_loop": false,
    "_muted": false,
    "_onend": [],
    "_onfade": [],
    "_onload": [],
    "_onloaderror": [],
    "_onmute": [],
    "_onorientation": [],
    "_onpause": [],
    "_onplay": [],
    "_onplayerror": [],
    "_onpos": [],
    "_onrate": [],
    "_onresume": [],
    "_onseek": [],
    "_onstereo": [],
    "_onstop": [],
    "_onvolume": [],
    "_orientation": [1, 0, 0],
    "_pannerAttr": {
        "coneInnerAngle": 360,
        "coneOuterAngle": 360,
        "coneOuterGain": 0,
        "distanceModel": "inverse",
        "maxDistance": 10000,
        "panningModel": "HRTF",
        "refDistance": 1,
        "rolloffFactor": 1
    },
    "_playLock": false,
    "_pool": 5,
    "_pos": null,
    "_preload": true,
    "_queue": [{
        "action": "[Function action]",
        "event": "play"
    }],

    "_rate": 1,

    "_sounds": [{
        "_ended": false, 
        "_errorFn": "[Function bound _errorListener]",
        "_id": 1001,
        "_loadFn": "[Function bound _loadListener]",
        "_loop": false,
        "_muted": false,
        "_node": "<audio preload=\"auto\" src=\"src/sound/mp3/0.mp3,src/sound/wav/0.wav\" />",
        "_orientation": [1, 0, 0],
        "_pannerAttr": {
            "coneInnerAngle": 360,
            "coneOuterAngle": 360,
            "coneOuterGain": 0,
            "distanceModel": "inverse",
            "maxDistance": 10000,
            "panningModel": "HRTF",
            "refDistance": 1,
            "rolloffFactor": 1
        },
        "_parent": "[Circular]",
        "_paused": true,
        "_pos": null,
        "_rate": 1,
        "_seek": 0,
        "_sprite": "__default",
        "_stereo": null,
        "_volume": 1
    }],
    "_sprite": {},
    "_src": [
        "src/sound/mp3/0.mp3",
        "src/sound/wav/0.wav"],
    "_state": "unloaded",
    "_stereo": null,
    "_volume": 1,
    "_webAudio": false,
    "_xhrWithCredentials": false
}

test('return chord name from chord notes', () => {
    expect(playNote(noteObject))
        .toEqual('')
})
