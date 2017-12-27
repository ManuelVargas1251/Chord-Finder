const _intervals = [
	//intervals
	{
		interval: [2],
		name: "Minor 2nd",
		size: 1
	},
	{
		interval: [3],
		name: "Major 2nd",
		size: 1
	},
	{
		interval: [4],
		name: "Minor 3rd",
		size: 1
	},
	{
		interval: [5],
		name: "Major 3rd",
		size: 1
	},
	{
		interval: [6],
		name: "Perfect Fourth",
		size: 1
	},

	//Triads
	{
		interval: [5, 4],
		name: "Major",
		size: 2
	},
	{
		interval: [4, 5],
		name: "Minor",
		size: 2
	},
	{
		interval: [5, 5],
		name: "Augmented",
		size: 2
	},
	{
		interval: [4, 4],
		name: "Diminished",
		size: 2
	},

	//Triad Inversions - not working, must change root
	{
		interval: [4, 6],
		name: "1st Inversion",
		size: 2
	},
	{
		interval: [6, 5],
		name: "2nd Inversion",
		size: 2
	},

	//7th Chords
	{
		interval: [5, 4, 5],
		name: "Major 7",
		size: 3
	},
	{
		interval: [4, 5, 4],
		name: "Minor 7",
		size: 3
	},
	{
		interval: [5, 5, 3],
		name: "Augmented 7",
		size: 3
	},
	{
		interval: [5, 4, 4],
		name: "Dominant 7",
		size: 3
	},
	{
		interval: [5, 5, 4],
		name: "Augmented Major 7",
		size: 3
	},
	{
		interval: [4, 4, 4],
		name: "Fully Diminished 7",
		size: 3
	},
	{
		interval: [4, 4, 4],
		name: "Half-Diminished 7",
		size: 3
	},
	{
		interval: [4, 5, 5],
		name: "Minor Major 7",
		size: 3
	},

	//7th Chord Inversions
	{
		interval: [4, 5, 2],
		name: "1st Inversion",
		size: 3
	},
	{
		interval: [5, 2, 5],
		name: "2nd Inversion",
		size: 3
	},
	{
		interval: [2, 5, 4],
		name: "3rd Inversion",
		size: 3
	}
];

Object.freeze(_intervals);

//new interval library structure
//using freeze to prevent data from being altered
const _newIntervals = Object.freeze({
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

});