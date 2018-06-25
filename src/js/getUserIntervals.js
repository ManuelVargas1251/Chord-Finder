//return array of intervals found in chord
function getUserIntervals(userChord) {
	//console.log("userChord Length: " + userChord.length)

	let index = 0,
		intervals = [],
		num_of_intervals = userChord.length - 1

	// store intervals
	while (num_of_intervals > 0) {
		intervals.push(
			// getInterval(
			// 	getNoteId(userChord[index]),
			// 	getNoteId(userChord[index + 1])
			// )

			Math.abs(
				getNoteId(userChord[index]) -
				getNoteId(userChord[index + 1]))
				 + 1
		)
		num_of_intervals--
		index++
	}
	return intervals
}
function getNoteId(value) {
    return Object
        .keys(_notes)
        .find(key => _notes[key] === value);
}
module.exports = getUserIntervals
