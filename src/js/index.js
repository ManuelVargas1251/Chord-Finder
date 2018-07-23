// DOM Events Handlers
'use strict'
//console.clear()

const ui = require('./processDOMChord.js')

// two global arrays, one storing chord ids, the other storing chord note names
let userChordIds = [],
	userChord = []

// mouse click event
$(".key").click(function () {
	//toggle key color key when pressed
	//pass note id to add to chord
	$(this).toggleClass("pressed")
	ui.processDOMChord($(this).attr('id'))
})

// keyboard event
$("html").keypress(function (element) {
	let noteCode = keyMapping[element.which]
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode)
	console.log(noteCode)
})
