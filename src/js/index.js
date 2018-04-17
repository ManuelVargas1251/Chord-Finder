// entry point to start functionality
'use strict'
console.clear()

// two global arrays, one storing chord ids, the other storing chord note names
var userChordIds = []
var userChord = []
let noteCode //= []
let keyMapping = {
	97: 0, //'C'
	119: 1, //'C#',
	115: 2, //'D',
	101: 3, //'D#',
	100: 4, //'E',
	102: 5, //'F',
	116: 6, //'F#',
	103: 7, //'G',
	121: 8, //'G#',
	104: 9, //'A',
	117: 10, //'A#',
	106: 11 //'B'
}

// using a mouse click
$(".key").click(function () {
	//toggle key color key when pressed
	//pass note id to add to chord
	$(this).toggleClass("pressed")
	processDOMChord($(this).attr('id'))
})

// using computer keyboard mapping
$("html").keypress(function (element) {
	//grab note and use it
	noteCode = keyMapping[element.which]
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode)
	console.log(noteCode)
})

function processDOMChord(newNoteId) {
	// define bool for testing duplicate note entries
	// when key is clicked, save note in newNote
	let isDuplicate = false

	//if newNote is already in the array, remove both
	userChordIds.forEach((element, i) => {
		if (newNoteId == element) {
			isDuplicate = true
			userChordIds.splice(i, 1)
		}
	})

	// push to array if no duplicate found
	if (isDuplicate == false) {
		userChordIds.push(newNoteId)
	}

	// sort and update array
	// explicit sort bc default implementation does not sort double digits correctly
	userChordIds.sort((a, b) => {
		return a - b
	})
	console.log('sorted userChordIds: ' + userChordIds)

	//convert note ids to note names
	userChord = getNoteChord(userChordIds)
	console.log('userChord: ' + userChord)

	// run the update chord
	$('.chord').text(updateChord(userChord))
}