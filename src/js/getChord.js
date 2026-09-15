// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {
	// Empty selections do not form a chord.
	if (userChord.length === 0) {
		return ''
	}

	// finding root note
	let rootNote = ''
	let root = 0

	// checks all user intervals if they are a major or minor third
	userIntervals.forEach(interval => {
		//console.log('interval: ' + interval)
		if (interval === 5 || interval === 4) {
			root++
		}
	})

	// Root-position chords use the first selected note.
	if (userIntervals.length === root) {
		rootNote = userChord[0]
	}
	else {
		// Inversions use their interval pattern to identify the root.
		if (userIntervals[0] > 5) {
			rootNote = userChord[1]
		}
		if (userIntervals[1] === 6) {
			rootNote = userChord[2]
		}
		if (userIntervals[0] === 8) {
			rootNote = userChord[0]
		}
	}

	// displays how many items it had to search through
	// prints object and a count of the times it's been called
	const findIntervals = library => library.interval.toString() === userIntervals.toString()

	if (userIntervals.length === 0) {
		return rootNote
	}

	// Search intervals matching the selected chord size.
	const chord = __intervals.get(userIntervals.length)?.find(findIntervals)

	if (!chord) {
		console.warn('no chord defined')
		return ''
	}

	return rootNote + ' ' + chord.name
}
exports.getChord = getChord
