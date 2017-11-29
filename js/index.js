console.clear()

//var _alphabet = []

function get_user_chord(){
	return ["D","F#","A"];
}


//returns what type of accidental the chord has; sharps, flats, or natural
function get_accidental(user_chord){
	
	var accidental = "natural"
	
	user_chord.forEach(function(note){
		if(note[1] === "#"){
			accidental = "sharps"
		}
		else if(note[1] === "b"){
			accidental = "flats"
		}
	});
	
	return accidental;
};

function get_user_alphabet(accidental){
	if(accidental === "sharps"){
		var AB = "A#", CD = "C#", DE = "D#", FG = "F#", GA = "G#";
		}
	else{
		var AB = "Bb", CD = "Db", DE = "Eb", FG = "Gb", GA = "Ab";
	}
	return ["A", AB, "B", "C", CD, "D", DE, "E", "F", FG, "G", GA]
}

function get_alpha_root(user_chord, chord_size, alphabet){
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

function get_interval(note, alphabet){
	console.log("one int");
}

function get_intervals(user_chord, alphabet_from_root){
	
	let i = user_chord.length - 1;
	var index = 0;
	let intervals = [];
	
	while(i>0){
		
		intervals.push(get_interval(user_chord[index], alphabet_from_root));
		
		
		console.log("pla")
		i--;
		index++;
	}
	
	console.log("getting intervals")
}

//////////////////
//////////////////
//MAIN MAIN MAIN M
//instantly get input array
let user_chord = get_user_chord()
console.log(user_chord)

let accidental = get_accidental(user_chord)
//console.log(accidental)

//load either sharps or flats alphabet
//maybe not needed
var user_alphabet = get_user_alphabet(accidental) 
//console.log(user_alphabet)

//alphabet starting with the root of the
let alphabet_from_root = get_alpha_root(user_chord, user_chord.length, user_alphabet)
console.log(alphabet_from_root)

//write function that organize notes that may be clustered A B C# E => A C# E B

//stores array with all intervals of notes
let intervals = get_intervals(user_chord, alphabet_from_root)

