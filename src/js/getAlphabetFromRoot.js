//return alphabet starting with the root of the chord
function getAlphabetFromRoot(user_chord){

	let chord_root = user_chord[0]
	var alpha_root = []
	var alpha_temp = []

	_alphabet.forEach(function(key){
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