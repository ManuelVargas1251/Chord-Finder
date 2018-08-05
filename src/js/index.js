// DOM Events Handlers
'use strict'
//console.clear()

const processDOMChord = require('./processDOMChord.js')

// two global arrays, one storing chord ids, the other storing chord note names
let userChordIds = [],
	userChord = []

// mouse click event
$(".key").click(function () {
	//toggle key color key when pressed
	//pass note id to add to chord
	$(this).toggleClass("pressed")
	processDOMChord($(this).attr('id'), userChordIds)
})

// keyboard event
$("html").keypress(function (element) {
	let noteCode = keyMapping[element.which]
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode, userChordIds)
	console.log(noteCode)
})
