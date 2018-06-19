//return array of intervals found in chord
function getUserIntervals(userChord) {
	console.log("userChord Length: " + userChord.length)

	let num_of_intervals = userChord.length - 1,
		index = 0,
		intervals = [],
		interval

	while (num_of_intervals > 0) {
		intervals.push(getInterval(userChord[index],userChord[index + 1]))
		num_of_intervals--
		index++
	}

	return intervals
}
// module.exports = getUserIntervals
