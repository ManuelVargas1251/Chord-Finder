



function getRoot(user_chord) {
	console.error('getChord: ' + user_chord)
	/*

		// check note intervals()
		//if intervals are all divisble by 5




		

	*/

	if (user_chord.length > 1) {
		user_chord.forEach((e) => {
			console.warn(e);
		})
	}

}


//return alphabet starting with the root of the chord
function getAlphabetFromRoot(user_chord) {



	let chord_root = getRoot(user_chord),
		// let chord_root = user_chord[0],
		a_root = [],
		a_temp = []

	_alphabet.forEach(function (key) {
		if (key === chord_root || a_root.length) {
			a_root.push(key)
		}

		if (a_root.length == 0) {
			a_temp.push(key)
		}
		//console.log(key)
	})
	return a_root.concat(a_temp)
}
// module.exports = getAlphabetFromRoot
