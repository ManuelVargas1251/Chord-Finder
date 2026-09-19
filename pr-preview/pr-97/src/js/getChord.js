// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {

	// Return an empty string if the user has not selected any notes.
	if (userChord.length === 0) {
		return ''
	}

	// finding root note
	let rootNote = ''	// The determined root note of the chord
	let root = 0	// Counter for major or minor third intervals

	// Count the number of major or minor third intervals to help determine the root note.
	userIntervals.forEach(interval => {
		//console.log('interval: ' + interval)
		if (interval === 5 || interval === 4) {
			root++
		}
	})

	// Determine the root note for root-position chords based on interval analysis
	if (userIntervals.length === root) {
		rootNote = userChord[0]	// Root note for root-position chord
	}
	else {
		// Inversions use their interval pattern to identify the root.
		// Check 8 first because it also satisfies the broader > 5 condition.
		if (userIntervals[0] === 8) {
			rootNote = userChord[0]	// Root note for first inversion (interval 8)
		} else if (userIntervals[1] === 6) {
			rootNote = userChord[2]	// Root note for second inversion (interval 6)
		} else if (userIntervals[0] > 5) {
			rootNote = userChord[1]	// Root note for third inversion (interval > 5)
		}
	}

	// Function to find a matching interval pattern in the library
	const findIntervals = library => library.interval.toString() === userIntervals.toString()

	// Return the root note immediately if no intervals are selected.
	if (userIntervals.length === 0) {
		return rootNote
	}

	// Search intervals matching the selected chord size.
	const chord = __intervals.get(userIntervals.length)?.find(findIntervals)

	// Warn if no matching chord is found in the interval library
	if (!chord) {
		console.warn('no chord defined')
		return ''
	}

	// Two-note selections are intervals, not rooted chord names.
	if (userChord.length === 2) {
		return chord.name
	}

	// Return the chord name prefixed by the root note.
	return rootNote + ' ' + chord.name
}
	module.exports = getChord
