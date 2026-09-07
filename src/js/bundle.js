(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {

	// finding root note
	let root_note = '',
		root = 0,
		inversions = 0

	// checks all user intervals if they are a major or minor third
	// if not, if the interval is greater than 5, the chord is an inversion
	// if not, if the interval is less than 4, extended inversions?
	userIntervals.forEach(interval => {
		//console.log('interval: ' + interval)
		if (interval == 5 || interval == 4) {
			root++
		}
		else if (interval > 5) {
			inversions++
		}
	})

	// if the root counter is equal to the num of intervals
	// then the chord is in root position so return the first key
	// console.log('root: ' + root)
	// console.log('inversions: ' + inversions)
	// console.log('userChord: ' + userChord)
	if (userIntervals.length == root) {
		root_note = userChord[0]
	}
	else {
		//console.log('inversion')
		if (userIntervals[0] > 5) {
			root_note = userChord[1]
		}
		if (userIntervals[1] == 6) {
			root_note = userChord[2]
		}
		if (userIntervals[0] == 8) {
			root_note = userChord[0]
		}
	}

	// displays how many items it had to search through
	// prints object and a count of the times it's been called
	let findIntervals = function (library) {
		//console.log("this: " + this)	
		return library.interval == userIntervals.toString()
	}

	// finding the correct array by only sending the interval to be found in the object where the length matches means that searching will take a lot less time because it only has to search through a smaller section of the object library; this will be important for when the object libraries become larger.
	// console.log('userIntervals: ' + userIntervals)
	console.log('num of intervals: ' + userIntervals.length)

	//print _intervals
	// console.log('__intervals: ' + JSON.stringify(__intervals))
	// console.log('__intervals.get: ' + __intervals.get(userIntervals.length).find(findIntervals).name)

	// console.log(':: ::' + _intervals.get([5,4,5].length).find(library => library.interval == [5,4,5].toString()).name)
	// console.log(':: :: ::' + _intervals.get(userIntervals.length).find(library.interval == userIntervals.toString()).name)

	if (userChord.length != 0) {
		
		try {
			if (userIntervals.length == 0) {
				output = root_note
				console.log('root note: ' + output)
			} else if (userIntervals.length > 0) {
				console.log('try: ' + userIntervals.length)
				output = root_note + ' ' + __intervals.get(userIntervals.length).find(findIntervals).name
			}
		} catch (e) {
			output = ''
			console.warn("no chord defined")
		}
	}
	else {
		// if there are no notes in the chord, return an empty string
		output = ''
	}
	//return userChord[0] + " " + output.name
	return output
}
exports.getChord = getChord

},{}],2:[function(require,module,exports){
function getInterval(note_one, note_two) {
	return Math.abs(note_one - note_two) + 1
}
exports.getInterval = getInterval

},{}],3:[function(require,module,exports){
// converts user inputted chord 
// from array of ids to literal note name array
// return array of literal note names
function getNoteChord(idChord) {
    return idChord
        .map((element) => {
            return _notes[element]
        })
}

exports.getNoteChord = getNoteChord

},{}],4:[function(require,module,exports){
function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value)
}
module.exports = getNoteId

},{}],5:[function(require,module,exports){
const getInterval = require('./getInterval').getInterval
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
const getNoteChord = require('./getNoteChord.js').getNoteChord
const getNoteId = require('./getNoteId.js').getNoteId
const updateChord = require('./updateChord.js').updateChord

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
        $('.chord').text(updateChord(userChord, getNoteId))

    } else {
        // reset chord name
        $('.chord').text(updateChord([], undefined))
    }
}

module.exports = processDOMChord
},{"./getNoteChord.js":3,"./getNoteId.js":4,"./sound.js":8,"./updateChord.js":9}],8:[function(require,module,exports){
// let preloaded = true

function preload() {
    let notes = []
    _notes.forEach((element, index) => {
        notes[index] = new Audio('src/sound/mp3/' + index + '.mp3')
        notes[index].preload = true
    })
    return notes
}

//plays note when pressed/clicked
function playNote(noteId, notes) {
    try {
        notes[noteId].play()
    }
    catch (error) {
        console.error(error)
    }
    return notes
}

exports.playNote = playNote
exports.preload = preload

},{}],9:[function(require,module,exports){
const getUserIntervals = require('./getUserIntervals.js')
const getChord = require('./getChord.js').getChord

// main function in the program
function updateChord(newChord) {
	// stores array with all intervals of notes
	let userIntervals = getUserIntervals(newChord)
	console.info('userIntervals: ' + userIntervals)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}

exports.updateChord = updateChord

},{"./getChord.js":1,"./getUserIntervals.js":5}]},{},[6]);
