//return array of intervals found in chord
function getUserIntervals(userChord, alphabet_from_root) {

	console.log("user chord notesum: " + userChord.length)
	// userChord.forEach(element => {
	// 	console.log(getNoteId(element))
	// });

	let num_of_intervals = userChord.length - 1,
		index = 0,
		intervals = [],
		interval

	while (num_of_intervals > 0) {

		let note_one = userChord[index]
			, note_two = userChord[index + 1]

		console.log(
			'1: ' 		+ 
			note_one 	+
			', 2: ' 	+ 
			note_two
		)

		if (getNoteId(note_one) < getNoteId(note_two)) {
			console.error('note ' + note_one + ' is to the left of note ' + note_two)
		}
		else {
			console.error('note ' + note_one + ' is to the right of note ' + note_two)
		}

		interval = Math.abs(getNoteId(note_one) - getNoteId(note_two)) + 1
		console.log('interval:: ' + interval)
		intervals.push(interval)
		// intervals.push(
		// 	getInterval(
		// 		alphabet_from_root,
		// 		userChord[index],
		// 		userChord[index + 1]
		// 	)
		// )
		num_of_intervals--
		index++
	}

	return intervals
}
// module.exports = getUserIntervals
