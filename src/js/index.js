"use strict";
console.clear();

//var keyboard = _alphabet.slice().concat(_alphabet.slice())

//main
//let userChord = getUserChord();
var userChord = [];

//console.log(updateChord(userChord));


//Event Handlers//

//when key is clicked
$(".key").click(function(){

	//print letter to console
	//console.log($(this).attr('id'));
	userChord.push($(this).attr('id'));
	//console.log(userChord);

	//highlight key when pressed
	$(this).toggleClass("pressed");

	//everytime a key is pressed, update chord
	//console.log(updateChord(userChord));

	$(".chord").text(updateChord(userChord))
});
