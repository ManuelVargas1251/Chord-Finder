// entry point to start functionality

'use strict'
console.clear()

// two global arrays, one storing chord ids, the other storing chord note names
var userChordIds = []
var userChord = []

// key click event handler
// when a key is clicked,
$(".key").click(function () {

	//toggle key color key when pressed
	$(this).toggleClass("pressed")

	// define bool for testing duplicate note entries
	let isDuplicate = false

	// when key is clicked, save note in newNote
	let newNoteId = $(this).attr('id')

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
})





let noteCode //= []


// using computer keyboard mapping
$("html").keypress(function (element) {
	//toggle key color key when pressed

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

	// keypress history implementation
	//noteCode.push()
	noteCode = keyMapping[element.which]

	console.log(noteCode)
	//console.log(element.originalEvent.which)

	//toggle key color key when pressed
	$("#" + noteCode).toggleClass("pressed")
	


	// switch (element.which){
	// 	97 = 'C'
	// $(this).toggleClass("pressed")
	// }

});

$("html").keyup(function(){
	$("#" + noteCode).toggleClass("pressed")
}) 



