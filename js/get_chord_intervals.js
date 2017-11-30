//return array of intervals found in chord
function get_chord_intervals(user_chord, alphabet_from_root){

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