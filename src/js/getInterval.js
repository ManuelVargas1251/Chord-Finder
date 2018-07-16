
function getInterval(note_one, note_two) {
	//console.warn(note_one + ', ' + note_two)
	return Math.abs(note_one - note_two) + 1
}
exports.getInterval = getInterval