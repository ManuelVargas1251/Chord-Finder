function getInterval(note_one, note_two) {
	let interval = Math.abs(getNoteId(note_one) - getNoteId(note_two)) + 1
	console.warn(note_one + ', ' + note_two)
	return interval
}
module.exports = getInterval