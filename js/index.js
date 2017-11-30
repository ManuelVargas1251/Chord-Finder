console.clear()

function get_user_chord(){
	//return ["D","F#","A","C#"];
	//return ["D","F","A","C"];
	return ["C","E","G#","Bb"];
}

//needs to be re-written, 
const _alphabet = ["A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"]];

//return alphabet starting with the root of the chord
function get_alphabet_from_root(user_chord, alphabet){
	
	let chord_root = user_chord[0]
	var alpha_root = []
	var alpha_temp = []

	
	alphabet.forEach(function(key){
		if(key === chord_root || alpha_root.length){
			alpha_root.push(key)
		}
		
		if(alpha_root.length == 0){
			alpha_temp.push(key)
		}
		//console.log(key)
	});
	
	return alpha_root.concat(alpha_temp)
}

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

//return array of intervals found in chord
function get_intervals(user_chord, alphabet_from_root){
	
	var i = (user_chord.length) - 1;
	var index = 0;
	var intervals = [];
	
	while(i>0){
		intervals.push(get_interval(alphabet_from_root, user_chord[index], user_chord[index+1]));
		i -= 1;
		index += 1;
	}

	return intervals
}

//////////////////
//////////////////
//main
//////////////////
//////////////////
//instantly get input array
let user_chord = get_user_chord()
console.log("user chord: " + user_chord)

//returns alphabet starting with the root of the chord
let alphabet_from_root = get_alphabet_from_root(user_chord, _alphabet)
console.log("alphabet: " + alphabet_from_root)

//write function to convert chord cluster to root position; A B C# E => A C# E B

//stores array with all intervals of notes
let intervals = get_intervals(user_chord, alphabet_from_root)
console.log(intervals)

