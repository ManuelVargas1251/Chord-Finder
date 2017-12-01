"use strict"

console.clear()

function find(){
	
	//returns alphabet starting with the root of the chord
	let alphabetFromRoot = getAlphabetFromRoot(userChord)
	//console.log("alphabet: " + alphabet_from_root)

	//write function to convert chord cluster to root position
	//A B C# E => A C# E B

	//stores array with all intervals of notes
	let userIntervals = getUserIntervals(userChord, alphabetFromRoot)
	//console.log(intervals)

	let chord = getChord(userChord[0], userIntervals)
	console.log("=>  " + chord)
}

let userChord = getUserChord()
console.log("user chord: " + userChord)

find()
