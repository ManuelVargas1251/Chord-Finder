// DOM Events Handlers
'use strict'
console.clear()

// two global arrays, one storing chord ids, the other storing chord note names
let userChordIds = []
let userChord = []

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
	let noteCode = keyMapping[element.which]

	$( "#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode)
	console.log(noteCode)
})
