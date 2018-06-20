// searches the interval library to match the user's chord's intervals
// better searching method using .find()
function getChord(userChord, userIntervals) {

	let root_position = true


	let root_note = ''

	userIntervals.forEach(interval => {
		console.log(interval)
		
		if (interval > 5 ) {
			root_position = false
			root_note = userChord[2]
		}

		if(interval == 5 || interval == 4){
			root_note = userChord[0]
		}


		else if(interval < 4){
			root_note = userChord[1]
		}


	});

	// if (!root_position) {
	// 	console.warn('not root position!')
	// }
	// else{
	// 	console.log('root position!')
	// 	userChord[0]
	// }

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
					output = root_note;
					break;
				case 1:
					output = _intervals.one.find(findIntervals).name;
					break;
				case 2:
					output = root_note + ' ' + _intervals.two.find(findIntervals).name;
					break;
				case 3:
					output = root_note + ' ' + _intervals.three.find(findIntervals).name;
					break;
				case 4:
					output = root_note + ' ' + _intervals.four.find(findIntervals).name;
					break;
				default:
					console.warn('--warning: chord not defined yet--')
					break;
			}

		} catch (e) {
			output = ''
			console.warn("no chord defined")
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
