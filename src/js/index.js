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
