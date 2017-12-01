function getInterval(alphabet, startNote, endNote){
	//console.log(start_note + " " + end_note)
	
	var index = 0;
	var interval = 0;
	
	//traverse through alphabet if start note not reached yet
	while(!alphabet[index].includes(startNote)){
		index ++;
	}
	//store distance between startNote and endNote
	while(!alphabet[index].includes(endNote)){
		//console.log(alphabet[index])
		index++;
		interval++;
	}
	
	return interval+1;
}