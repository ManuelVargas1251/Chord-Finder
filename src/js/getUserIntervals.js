//return array of intervals found in chord
function getUserIntervals(userChord, alphabet_from_root) {

	console.log("user chord notesum: " + userChord.length)
	let i = userChord.length - 1,
		index = 0,
		intervals = []

	while (i > 0) {
		intervals.push(
			getInterval(
				alphabet_from_root,
				userChord[index],
				userChord[index + 1]
			)
		)
		i -= 1
		index += 1
	}

	return intervals
}
// module.exports = getUserIntervals
