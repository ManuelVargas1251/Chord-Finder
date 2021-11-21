// DOM Events Handlers
'use strict'
//console.clear()

const processDOMChord = require('./processDOMChord.js')
const sound = require('./sound.js')

// two global arrays, one storing chord ids, the other storing chord note names
let userChordIds = [],
	userChord = []
var notes = sound.preload()

// mouse click on piano key event
$(".key").click(function () {
	//pass note id to add to chord
	let noteCode = $(this).attr('id')
	$(this).toggleClass("pressed")	//toggle key color key when pressed
	processDOMChord(noteCode, userChordIds)
})

// keyboard keypress event
$("html").keypress(function (element) {
	let noteCode = keyMapping[element.which]
	$("#" + noteCode).toggleClass("pressed")
	processDOMChord(noteCode, userChordIds)
})

// reset button event
$(".reset").click(function () {
	userChordIds.forEach((v) => $("#" + v).toggleClass("pressed"))
	userChordIds = []
	processDOMChord(undefined, userChordIds, notes)
})
