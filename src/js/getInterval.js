function getInterval(alphabet, startNote, endNote) {
	let index = 0
	let interval = 1

	//traverse through alphabet if start note not reached yet
	while (!alphabet[index].includes(startNote)) {
		//console.log(index + ": " + alphabet[index])
		index++
	}
	//store distance between startNote and endNote
	while (!alphabet[index].includes(endNote)) {
		//console.log(alphabet[index])
		index++
		interval++
	}
	return interval
}
// module.exports = getInterval
