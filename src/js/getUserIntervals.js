//return array of intervals found in chord
function getUserIntervals(userChord, alphabet_from_root) {

	//console.log("user chord length: " + userChord.length)
	var i = (userChord.length) - 1
	var index = 0
	var intervals = []

	while (i > 0) {
		intervals.push(getInterval(alphabet_from_root, userChord[index], userChord[index + 1]))
		i -= 1
		index += 1
	}

	return intervals
}
// module.exports = getUserIntervals
