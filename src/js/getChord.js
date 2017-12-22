//searches the interval library to match the user's chord's intervals
function depricated_getChord(userChord, userIntervals){
	let root = userChord[0], chord = "", index = 0

	while(chord === ""){

		if(userIntervals.toString() === _intervals[index].interval.toString()){
			chord = _intervals[index].name;
		}

		index++
	}

	//attach root to chord if there are more than two notes
	//if output is an interval size of 2, don't show chord letter
	if(_intervals[index].size > 1)
		chord = root + " " + chord;

	return chord
}

//new function that will replace the above function
//better searching method using .find()
function getChord(userChord, userIntervals){

	let findINT = function(library){
		//displays how many items it had to search through
		//prints object and a count of the times it's been called
		//console.log("this: " + this)	
		return library.interval == userIntervals.toString();
	};

	//finding the correct array by only sending the interval to be found in the object where the length matches means that searching will take a lot less time because it only has to search through a smaller section of the object library; this will be important for when the object libraries become larger.

	//switch case depending on how many notes were pressed 
	switch(userIntervals.length){
		case 2:
			output = _newIntervals.two.find(findINT);
			break;		
		case 3:
			output = _newIntervals.three.find(findINT);
			break;
		case 4:
			output = _newIntervals.four.find(findINT);
			break;
		case 5:
			output = _newIntervals.four.find(findINT);
			break;
		default:
			console.log("error: not a chord or interval");
			break;
	}

	return userChord[0] + " " + output.name
}