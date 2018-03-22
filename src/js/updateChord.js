// main function in the program
function updateChord(newChord){
	
	// returns alphabet starting with the root of the chord
	let alphabetFromRoot = getAlphabetFromRoot(newChord)
	// console.log("alphabet: " + alphabet_from_root)

	// stores array with all intervals of notes
	let userIntervals = getUserIntervals(newChord, alphabetFromRoot)
	//console.log(intervals)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}
module.exports = updateChord
