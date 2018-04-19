// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {

	// displays how many items it had to search through
	// prints object and a count of the times it's been called
	let findIntervals = function (library) {
		//console.log("this: " + this)	
		return library.interval == userIntervals.toString()
	}

	// finding the correct array by only sending the interval to be found in the object where the length matches means that searching will take a lot less time because it only has to search through a smaller section of the object library; this will be important for when the object libraries become larger.

	//console.log('num of intervals: ' + userIntervals.length)
	if (userChord.length != 0) {
		try {
			// searches interval library depending on how many intervals the chord has
			switch (userIntervals.length) {
				case 0:
					output = userChord[0];
					break;
				case 1:
					output = _intervals.one.find(findIntervals).name;
					break;
				case 2:
					output = userChord[0] + ' ' + _intervals.two.find(findIntervals).name;
					break;
				case 3:
					output = userChord[0] + ' ' + _intervals.three.find(findIntervals).name;
					break;
				case 4:
					output = userChord[0] + ' ' + _intervals.four.find(findIntervals).name;
					break;
				default:
					console.log('--warning: chord not defined yet--')
					break;
			}

		}catch(e){
			output = ''
			console.log("no chord defined")
		}

	}
	else {
		// if there are no notes in the chord, return an empty string
		output = ''
	}

	//return userChord[0] + " " + output.name
	return output
}
// module.exports = getChord