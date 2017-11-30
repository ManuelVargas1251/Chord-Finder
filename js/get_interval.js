function get_interval(alphabet, start_note, end_note){
	//console.log(start_note + " " + end_note)

	var index = 0;
	var indexj = 0;

	//traverse through alphabet if start note not reached yet
	while(!alphabet[index].includes(start_note)){
		index ++;
	}
	while(!alphabet[index].includes(end_note)){
		//console.log(alphabet[index])
		index++;
		indexj++;
	}
	//console.log("index: " + indexj);

	return indexj+1;
}