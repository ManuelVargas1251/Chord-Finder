//searches the interval library to match the user's chord's intervals
function getChord(userChord, userIntervals){
	let root = userChord[0], chord = "", index = 0

	while(chord === ""){

		if(userIntervals.toString() === _intervals[index].value.toString()){
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



function newGetChord(){
	let findINT = function(interval){
		//console.log("this: " + this)	//prints object and a count of the times it's been called
		return interval.ar == myInterval.toString();
	};

	//finding the correct array by only sending the interval to be found in the object where the length matches means that searching will take a lot less time because it only has to search through a smaller section of the object library; this will be important for when the object libraries become larger.

	switch(myInterval.length){
		case 2:
			output = libTwo.find(findINT)

			break;
		case 3:
			output = libThree.find(findINT)
			break;
	}
}