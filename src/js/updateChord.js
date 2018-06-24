// main function in the program
function updateChord(newChord) {
	// stores array with all intervals of notes
	// console.log(intervals)
	let userIntervals = getUserIntervals(newChord, _alphabet)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}
module.exports = updateChord
