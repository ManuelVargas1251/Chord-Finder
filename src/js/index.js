// entry point to start functionality

"use strict"
console.clear()

// two global arrays, one storing chord ids, the other storing chord note names
var userChordIds = []
var userChord = []

// key click event handler
// when a key is clicked,
$(".key").click(function () {

	// when key is clicked, save note in newNote
	let newNoteId = $(this).attr('id')
	
	// define bool for testing duplicate note entries
	let isDuplicate = false
	
	//if duplicate, remove both
	userChordIds.forEach((element, i) => {
		if(newNoteId == element){
			//console.log("dup found!")
			isDuplicate = true
			userChordIds.splice(i, 1)
		} 
	})
	
	// push to array if no duplicate found
	if(isDuplicate == false){
		userChordIds.push(newNoteId)
	}

	// sort and update array
	// implicit sort bc default implementation does not sort double digits correctly
	userChordIds.sort((a, b) => {
		return a - b
	})
	console.log('Sorted userChordIds: ' + userChordIds);

	//convert note ids to note names
	userChord = convertChord(userChordIds)

	console.log('userChord: ' + userChord);

	//highlight key when pressed
	$(this).toggleClass("pressed")

	// run the update chord
	$(".chord").text(updateChord(userChord))
})