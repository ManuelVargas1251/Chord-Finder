const getUserIntervals = require('./getUserIntervals.js')
const getChord = require('./getChord.js').getChord

// main function in the program
function updateChord(newChord) {
	// stores array with all intervals of notes
	let userIntervals = getUserIntervals(newChord)
	console.info('userIntervals: ' + userIntervals)

	// find chord using the chord letters and interval values
	return getChord(newChord, userIntervals)
}

exports.updateChord = updateChord
