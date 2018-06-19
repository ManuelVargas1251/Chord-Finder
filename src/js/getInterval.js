function getInterval(note_one, note_two) {
	interval = Math.abs(getNoteId(note_one) - getNoteId(note_two)) + 1
	
	console.warn('1: ' + note_one +', 2: ' + note_two)
	console.log('interval:: ' + interval)

	return interval
}
// module.exports = getInterval


	// if (getNoteId(note_one) < getNoteId(note_two)) {
	// 	console.error('note ' + note_one + ' is to the left of note ' + note_two)
	// }
	// else {
	// 	console.error('note ' + note_one + ' is to the right of note ' + note_two)
	// }
