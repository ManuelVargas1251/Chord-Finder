// interval library structure
// also stores chords because chords are groupings of intervals
// using freeze to prevent data from being altered
const _intervals = Object.freeze({
	//intervals
	one: [
		{
			interval: [2],
			name: "Minor 2nd"
		},
		{
			interval: [3],
			name: "Major 2nd"
		},
		{
			interval: [4],
			name: "Minor 3rd"
		},
		{
			interval: [5],
			name: "Major 3rd"
		},
		{
			interval: [6],
			name: "Perfect Fourth"
		},
		{
			interval: [7],
			name: "Augmented Fourth",
			secondName: "Diminished Fifth"
		},
		{
			interval: [8],
			name: "Perfect Fifth"
		},
		{
			interval: [9],
			name: "Minor Sixth"
		},
		{
			interval: [10],
			name: "Major Sixth"
		},
		{
			interval: [11],
			name: "Minor Seventh"
		},
		{
			interval: [12],
			name: "Major Seventh"
		}
	],

	//Triads
	two: [
		{
			interval: [5, 4],
			name: "Major"
		},
		{
			interval: [4, 5],
			name: "Minor"
		},
		{
			interval: [5, 5],
			name: "Augmented"
		},
		{
			interval: [4, 4],
			name: "Diminished"
		},

		//Triad Inversions - not working, must change root
		{
			interval: [4, 6],
			name: "1st Inversion"
		},
		{
			interval: [6, 5],
			name: "2nd Inversion"
		},

	],

	//7th Chords
	//could later store 9th chords with omitted 
	three: [
		{
			interval: [5, 4, 5],
			name: "Major 7"
		},
		{
			interval: [4, 5, 4],
			name: "Minor 7"
		},
		{
			interval: [5, 5, 3],
			name: "Augmented 7"
		},
		{
			interval: [5, 4, 4],
			name: "Dominant 7"
		},
		{
			interval: [5, 5, 4],
			name: "Augmented Major 7"
		},
		{
			interval: [4, 4, 4],
			name: "Fully Diminished 7"
		},
		{
			interval: [4, 4, 4],
			name: "Half-Diminished 7"
		},
		{
			interval: [4, 5, 5],
			name: "Minor Major 7"
		},

		//7th Chord Inversions
		{
			interval: [4, 5, 2],
			name: "1st Inversion"
		},
		{
			interval: [5, 2, 5],
			name: "2nd Inversion"
		},
		{
			interval: [2, 5, 4],
			name: "3rd Inversion"
		}]

})