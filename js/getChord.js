function getChord(root, userIntervals){
	var chord = "", index = 0

	while(chord === ""){
		if(userIntervals.toString() === _intervals[index].value.toString()){
			chord = _intervals[index].name;
		}
		index++
	}
	return root + " " + chord
}