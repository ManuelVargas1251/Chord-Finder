function getInterval(alphabet, startNote, endNote) {

	let index = 0,
		interval = 1


	// let fill_left = () => {
	// 	while(1+2){
	// 		console.info('this is 1')
	// 	}
	// }



	// let note_reference = fill_left(startNote) + fill_right(startNote)
































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
