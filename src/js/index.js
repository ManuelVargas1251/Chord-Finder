"use strict"
console.clear()


var keyboard = _alphabet.slice().concat(_alphabet.slice())

//event handlers
$("#C0").click(function(){
	console.log("c0 was clicked yo")
});


//
let userChord = getUserChord()

console.log(updateChord(userChord))