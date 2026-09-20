function getInterval(firstNote, secondNote) {
	return Math.abs(firstNote - secondNote) + 1
}
module.exports = getInterval
