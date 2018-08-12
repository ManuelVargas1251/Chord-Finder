const getUserIntervals = require('./getUserIntervals.js')
const getChord = require('./getChord.js')

// main function in the program
function updateChord(newChord) {
	// stores array with all intervals of notes
	// console.log(intervals)
	let userIntervals = getUserIntervals(newChord)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}

module.exports = updateChord
