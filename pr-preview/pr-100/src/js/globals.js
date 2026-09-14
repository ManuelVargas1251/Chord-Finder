// global variables and constants used throughout the application.
console.info('🐱🐱')

// map from computer keyboard to piano keyboard selector id
globalThis._computerKeyboardMap = new Map([
	[97, 0],
	[119, 1],
	[115, 2],
	[101, 3],
	[100, 4],
	[102, 5],
	[116, 6],
	[103, 7],
	[121, 8],
	[104, 9],
	[117, 10],
	[106, 11]
])

//defining different names for notes even though the final web app won't have the ability to distinguish between them because the user will only have a keyboard layout.
globalThis._alphabet = [
	["C", "B#"],	//C
	["C#", "Db"],	//C#
	"D", 			//D
	["D#", "Eb"],	//D#
	"E", 			//E
	["F", "E#"], 	//F
	["F#", "Gb"],	//F#
	"G", 			//G
	["G#", "Ab"],	//G#
	"A", 			//A
	["A#", "Bb"],	//A#
	["B", "Cb"]		//B
]

globalThis._notes = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B"
]

// interval library structure
// also stores chords because chords are groupings of intervals
// using freeze to prevent data from being altered
//_intervals.get(1)[0].name
// _intervals.get(3)[0].name
globalThis.__intervals = new Map([
	[1, [
		{ name: "Minor 2nd", interval: [2] },
		{ name: "Major 2nd", interval: [3] },
		{ name: "Minor 3rd", interval: [4] },
		{ name: "Major 3rd", interval: [5] },
		{ name: "Perfect Fourth", interval: [6] },
		{ name: "Augmented Fourth", interval: [7], secondName: "Diminished Fifth" },
		{ name: "Perfect Fifth", interval: [8] },
		{ name: "Minor Sixth", interval: [9] },
		{ name: "Major Sixth", interval: [10] },
		{ name: "Minor Seventh", interval: [11] },
		{ name: "Major Seventh", interval: [12] },
		{ name: "Perfect Octave", interval: [13] },
		{ name: "Minor Ninth", interval: [14] },
		{ name: "Major Ninth", interval: [15] },
		{ name: "Minor Tenth", interval: [16] },
		{ name: "Major Tenth", interval: [17] },
		{ name: "Perfect Eleventh", interval: [18] },
		{ name: "Augmented Eleventh", interval: [19], secondName: "Diminished Twelfth" },
		{ name: "Perfect Twelfth", interval: [20] },
		{ name: "Minor Thirteenth", interval: [21] },
		{ name: "Major Thirteenth", interval: [22] },
		{ name: "Minor Fourteenth", interval: [23] },
		{ name: "Major Fourteenth", interval: [24] },
		{ name: "Perfect Fifteenth", interval: [25] }
	]],
	[2, [
		{ name: "Major", interval: [5, 4] },
		{ name: "Minor", interval: [4, 5] },
		{ name: "Augmented", interval: [5, 5] },
		{ name: "Diminished", interval: [4, 4] },
		{ name: "1st Inversion", interval: [4, 6] },
		{ name: "1st Inversion", interval: [5, 6] },
		{ name: "2nd Inversion", interval: [6, 5] },
		{ name: "Omit 3", interval: [8, 5] }
	]],
	[3, [
		{ name: "Major 7", interval: [5, 4, 5] },
		{ name: "Minor 7", interval: [4, 5, 4] },
		{ name: "Augmented 7", interval: [5, 5, 4] },
		{ name: "Dominant 7", interval: [5, 4, 4] },
		{ name: "Augmented Major 7", interval: [5, 5, 4] },
		{ name: "Fully Diminished 7", interval: [4, 4, 4] },
		{ name: "Half-Diminished 7", interval: [4, 4, 4] },
		{ name: "Minor Major 7", interval: [4, 5, 5] },
		{ name: "1st Inversion", interval: [4, 5, 2] },
		{ name: "2nd Inversion", interval: [5, 2, 5] },
		{ name: "3rd Inversion", interval: [2, 5, 4] }
	]],
	[4, [
		{ name: "Major 9", interval: [5, 4, 5, 4] },
		{ name: "Minor 9", interval: [4, 5, 4, 5] },
		{ name: "Augmented 9", interval: [5, 5, 4, 5] },
		{ name: "Dominant 9", interval: [5, 4, 4, 5] },
		{ name: "Augmented Major 9", interval: [5, 5, 4, 5] },
		{ name: "Fully Diminished 9", interval: [4, 4, 4, 4] },
		{ name: "Half-Diminished 9", interval: [4, 4, 4, 5] },
		{ name: "Minor Major 9", interval: [4, 5, 5, 5] },
		{ name: "1st Inversion", interval: [4, 5, 2, 5] },
		{ name: "2nd Inversion", interval: [5, 2, 5, 4] },
		{ name: "3rd Inversion", interval: [2, 5, 4, 5] }
	]],
	[5, [
		{ name: "Major 11", interval: [5, 4, 5, 4, 5] },
		{ name: "Minor 11", interval: [4, 5, 4, 5, 4] },
		{ name: "Augmented 11", interval: [5, 5, 4, 5, 4] },
		{ name: "Dominant 11", interval: [5, 4, 4, 5, 4] },
		{ name: "Augmented Major 11", interval: [5, 5, 4, 5, 4] },
		{ name: "Fully Diminished 11", interval: [4, 4, 4, 4, 4] },
		{ name: "Half-Diminished 11", interval: [4, 4, 4, 5, 4] },
		{ name: "Minor Major 11", interval: [4, 5, 5, 5, 4] },
		{ name: "1st Inversion", interval: [4, 5, 2, 5, 4] },
		{ name: "2nd Inversion", interval: [5, 2, 5, 4, 5] },
		{ name: "3rd Inversion", interval: [2, 5, 4, 5, 4] }
	]],
	[6, [
		{ name: "Major 13", interval: [5, 4, 5, 4, 5, 4] },
		{ name: "Minor 13", interval: [4, 5, 4, 5, 4, 5] },
		{ name: "Augmented 13", interval: [5, 5, 4, 5, 4, 5] },
		{ name: "Dominant 13", interval: [5, 4, 4, 5, 4, 5] },
		{ name: "Augmented Major 13", interval: [5, 5, 4, 5, 4, 5] },
		{ name: "Fully Diminished 13", interval: [4, 4, 4, 4, 4, 4] },
		{ name: "Half-Diminished 13", interval: [4, 4, 4, 5, 4, 5] },
		{ name: "Minor Major 13", interval: [4, 5, 5, 5, 4, 5] },
		{ name: "1st Inversion", interval: [4, 5, 2, 5, 4, 5] },
		{ name: "2nd Inversion", interval: [5, 2, 5, 4, 5, 4] },
		{ name: "3rd Inversion", interval: [2, 5, 4, 5, 4, 5] }
	]]
])
