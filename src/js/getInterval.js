function getInterval(note_one, note_two) {
	interval = Math.abs(getNoteId(note_one) - getNoteId(note_two)) + 1
	console.warn('1: ' + note_one + ', 2: ' + note_two)
	return interval
}
