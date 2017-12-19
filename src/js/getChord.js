function getChord(root, userIntervals){
	var chord = "", index = 0

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