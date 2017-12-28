"use strict";
console.clear();

//var keyboard = _alphabet.slice().concat(_alphabet.slice())

//main
let userChord = getUserChord();

console.log(updateChord(userChord));


//Event Handlers//

//when key is clicked
$(".key").click(function(){

	//print letter to console
	console.log($(this).attr('id'));

	//highlight key when pressed
	$(this).toggleClass("pressed");
});
