// main function in the program
function updateChord(newChord) {

		// returns alphabet starting with the root of the chord
		// console.log("alphabet: " + alphabet_from_root)
	let alphabetFromRoot = getAlphabetFromRoot(newChord),

		// stores array with all intervals of notes
		//console.log(intervals)
		userIntervals = getUserIntervals(newChord, alphabetFromRoot)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}
// module.exports = updateChord
