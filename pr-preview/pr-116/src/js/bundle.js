(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {

	// Return an empty string if the user has not selected any notes.
	if (userChord.length === 0) {
		return ''
	}

	// finding root note
	let rootNote = ''	// The determined root note of the chord
	let root = 0	// Counter for major or minor third intervals

	// Count the number of major or minor third intervals to help determine the root note.
	userIntervals.forEach(interval => {
		//console.log('interval: ' + interval)
		if (interval === 5 || interval === 4) {
			root++
		}
	})

	// Determine the root note for root-position chords based on interval analysis
	if (userIntervals.length === root) {
		rootNote = userChord[0]	// Root note for root-position chord
	}
	else {
		// Inversions use their interval pattern to identify the root.
		// Check 8 first because it also satisfies the broader > 5 condition.
		if (userIntervals[0] === 8) {
			rootNote = userChord[0]	// Root note for first inversion (interval 8)
		} else if (userIntervals[1] === 6) {
			rootNote = userChord[2]	// Root note for second inversion (interval 6)
		} else if (userIntervals[0] > 5) {
			rootNote = userChord[1]	// Root note for third inversion (interval > 5)
		}
	}

	// Function to find a matching interval pattern in the library
	const findIntervals = library => library.interval.toString() === userIntervals.toString()

	// Return the root note immediately if no intervals are selected.
	if (userIntervals.length === 0) {
		return rootNote
	}

	// Search intervals matching the selected chord size.
	const chord = __intervals.get(userIntervals.length)?.find(findIntervals)

	// Warn if no matching chord is found in the interval library
	if (!chord) {
		console.warn('no chord defined')
		return ''
	}

	// Two-note selections are intervals, not rooted chord names.
	if (userChord.length === 2) {
		return chord.name
	}

	// Return the chord name prefixed by the root note.
	return rootNote + ' ' + chord.name
}
	module.exports = getChord

},{}],2:[function(require,module,exports){
function getInterval(firstNote, secondNote) {
	return Math.abs(firstNote - secondNote) + 1
}
module.exports = getInterval

},{}],3:[function(require,module,exports){
// Convert user-input chord IDs to literal note names.
function getNoteChord(idChord) {
    return idChord.map(noteId => _notes[noteId])
}

module.exports = getNoteChord
},{}],4:[function(require,module,exports){
function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value)
}
module.exports = getNoteId

},{}],5:[function(require,module,exports){
const getInterval = require('./getInterval')
const getNoteId = require('./getNoteId')

//return array of intervals found in chord
function getUserIntervals(userChord) {
	//console.log("userChord Length: " + userChord.length)
	let index = 0,
		intervals = [],
		num_of_intervals = userChord.length - 1

	// store intervals
	while (num_of_intervals > 0) {
		intervals.push(
			getInterval(
				getNoteId(userChord[index]),
				getNoteId(userChord[index + 1])
			)
		)
		num_of_intervals--
		index++
	}
	return intervals
}

module.exports = getUserIntervals

},{"./getInterval":2,"./getNoteId":4}],6:[function(require,module,exports){
// DOM Events Handlers
'use strict'
//console.clear()
const log = console.log
const info = console.info
const warn = console.warn
const error = console.error

const processDOMChord = require('./processDOMChord.js')
const sound = require('./sound.js')

// storing chord ids
let userChordIds = [],
	notes = sound.preload()	// preload sound

// mouse click on piano key event
$(".key").click(function () {
	//pass note id to add to chord
	let noteCode = $(this).attr('id')
	$(this).toggleClass("pressed")	//toggle key color key when pressed
	processDOMChord(noteCode, userChordIds, notes)
})

// keyboard keypress event
$("html").keypress(function (element) {
	let noteCode = _computerKeyboardMap.get(element.which)
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode, userChordIds, notes)
})

// reset button event
$(".reset").click(function () {
	userChordIds.forEach((v) => $("#" + v).toggleClass("pressed"))
	userChordIds = []
	processDOMChord(undefined, userChordIds)
})

},{"./processDOMChord.js":7,"./sound.js":8}],7:[function(require,module,exports){
const sound = require('./sound.js')
const getNoteChord = require('./getNoteChord.js')
const updateChord = require('./updateChord.js')

function processDOMChord(newNoteId, userChordIds, notes) {

    if ((newNoteId >= 0 && newNoteId < _notes.length) && userChordIds) {
        // define bool for testing duplicate note entries
        // when key is clicked, save note in newNote
        let isDuplicate = false

        // if newNote is in the array, remove note
        userChordIds.forEach((element, index) => {
            if (newNoteId === element) {
                isDuplicate = true
                userChordIds.splice(index, 1)
            }
        })

        // push to array if no duplicate found
        if (isDuplicate === false) {
            // play the audio
            sound.playNote(newNoteId, notes)

            //push the note into the array
            userChordIds.push(newNoteId)

            // sort and update array
            // explicit sort bc default implementation does not sort double digits correctly
            userChordIds.sort((a, b) => { return a - b })
        }

        //convert note ids to note names
        userChord = getNoteChord(userChordIds)
        // console.log('userChord: ' + userChord)

        // run the chord update
        $('.chord').text(updateChord(userChord))

    } else {
        // reset chord name
        $('.chord').text(updateChord([]))
    }
}

module.exports = processDOMChord
},{"./getNoteChord.js":3,"./sound.js":8,"./updateChord.js":9}],8:[function(require,module,exports){
// Preloads audio notes and provides functionality to play them
function preload() {
    return _notes.map((_, index) => {
        const note = new Audio('src/sound/mp3/' + index + '.mp3')
        note.preload = 'auto'  // Native HTML5 audio preload attribute
        return note
    })
}

// Plays a specific note from the preloaded notes array
function playNote(noteId, notes) {
    try {
        const playback = notes[noteId].play()
        if (playback && typeof playback.catch === 'function') {
            playback.catch(error => console.error(error))
        }
    } catch (error) {
        console.error(error)    // Log the error if playback fails
    }
    return notes
}
module.exports = { preload, playNote }
},{}],9:[function(require,module,exports){
const getUserIntervals = require('./getUserIntervals.js')
const getChord = require('./getChord.js')

// main function in the program
function updateChord(newChord) {
	// stores array with all intervals of notes
	let userIntervals = getUserIntervals(newChord)
	console.info('userIntervals: ' + userIntervals)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}

module.exports = updateChord

},{"./getChord.js":1,"./getUserIntervals.js":5}]},{},[6]);
