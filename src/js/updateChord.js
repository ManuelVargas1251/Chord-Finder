//main function in the program
function updateChord(newChord){
	
	//returns alphabet starting with the root of the chord
	let alphabetFromRoot = getAlphabetFromRoot(newChord);
	//console.log("alphabet: " + alphabet_from_root)

	//write function to convert chord cluster to root position
	//A B C# E => A C# E B

	//stores array with all intervals of notes
	let userIntervals = getUserIntervals(newChord, alphabetFromRoot);
	//console.log(intervals)

	let chord = getChord(newChord, userIntervals);
	//console.log("=>  " + chord)
	
	return chord;
}
