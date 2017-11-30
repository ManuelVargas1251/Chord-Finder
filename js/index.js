console.clear()

const _alphabet = ["A", ["A#", "Bb"], "B", "C", ["C#", "Db"], "D", ["D#", "Eb"], "E", "F", ["F#", "Gb"], "G", ["G#", "Ab"]];

//instantly get input array
let userChord = getUserChord()

console.log("user chord: " + userChord)

//returns alphabet starting with the root of the chord
let alphabet_from_root = get_alphabet_from_root(userChord, _alphabet)

console.log("alphabet: " + alphabet_from_root)

//write function to convert chord cluster to root position; A B C# E => A C# E B

//stores array with all intervals of notes
let user_intervals = get_chord_intervals(userChord, alphabet_from_root)

console.log(user_intervals)

let chord = get_chord(alphabet_from_root[0], user_intervals)
console.log("Chord: " + chord)


