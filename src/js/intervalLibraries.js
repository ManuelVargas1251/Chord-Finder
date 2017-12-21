const _intervals = [
	//intervals
	{ 
		value: [2],
		name: "Minor 2nd",
		size: 1
	},
	{ 
		value: [3],
		name: "Major 2nd",
		size: 1
	},
	{ 
		value: [4],
		name: "Minor 3rd",
		size: 1
	},
	{ 
		value: [5],
		name: "Major 3rd",
		size: 1
	},
	{ 
		value: [6],
		name: "Perfect Fourth",
		size: 1
	},

	//Triads
	{ 
		value: [5, 4],
		name: "Major",
		size: 2
	},
	{ 
		value: [4, 5],
		name: "Minor",
		size: 2
	},
	{ 
		value: [5, 5],
		name: "Augmented",
		size: 2
	},
	{ 
		value: [4, 4],
		name: "Diminished",
		size: 2
	},

	//Triad Inversions - not working, must change root
	{ 
		value: [4, 6],
		name: "1st Inversion",
		size: 2
	},
	{ 
		value: [6, 5],
		name: "2nd Inversion",
		size: 2
	},

	//7th Chords
	{ 
		value: [5, 4, 5],
		name: "Major 7",
		size: 3
	},
	{ 
		value: [4, 5, 4],
		name: "Minor 7",
		size: 3
	},
	{ 
		value: [5, 5, 3],
		name: "Augmented 7",
		size: 3
	},
	{ 
		value: [5, 4, 4],
		name: "Dominant 7",
		size: 3
	},
	{ 
		value: [5, 5, 4],
		name: "Augmented Major 7",
		size: 3
	},
	{ 
		value: [4, 4, 4],
		name: "Fully Diminished 7",
		size: 3
	},
	{ 
		value: [4, 4, 4],
		name: "Half-Diminished 7",
		size: 3
	},
	{ 
		value: [4, 5, 5],
		name: "Minor Major 7",
		size: 3
	},

	//7th Chord Inversions
	{ 
		value: [4, 5, 2],
		name: "1st Inversion",
		size: 3
	},	
	{ 
		value: [5, 2, 5],
		name: "2nd Inversion",
		size: 3
	},	
	{ 
		value: [2, 5, 4],
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
			value: [2],
			name: "Minor 2nd"
		},
		{ 
			value: [3],
			name: "Major 2nd"
		},
		{ 
			value: [4],
			name: "Minor 3rd"
		},
		{ 
			value: [5],
			name: "Major 3rd"
		},
		{ 
			value: [6],
			name: "Perfect Fourth"
		},
	],

	//Triads
	two : [	
		{ 
			value: [5, 4],
			name: "Major"
		},
		{ 
			value: [4, 5],
			name: "Minor"
		},
		{ 
			value: [5, 5],
			name: "Augmented"
		},
		{ 
			value: [4, 4],
			name: "Diminished"
		},

		//Triad Inversions - not working, must change root
		{ 
			value: [4, 6],
			name: "1st Inversion"
		},
		{ 
			value: [6, 5],
			name: "2nd Inversion"
		},

	],
	
	//7th Chords
	three: [	
		{ 
			value: [5, 4, 5],
			name: "Major 7"
		},
		{ 
			value: [4, 5, 4],
			name: "Minor 7"
		},
		{ 
			value: [5, 5, 3],
			name: "Augmented 7"
		},
		{ 
			value: [5, 4, 4],
			name: "Dominant 7"
		},
		{ 
			value: [5, 5, 4],
			name: "Augmented Major 7"
		},
		{ 
			value: [4, 4, 4],
			name: "Fully Diminished 7"
		},
		{ 
			value: [4, 4, 4],
			name: "Half-Diminished 7"
		},
		{ 
			value: [4, 5, 5],
			name: "Minor Major 7"
		},

		//7th Chord Inversions
		{ 
			value: [4, 5, 2],
			name: "1st Inversion"
		},	
		{ 
			value: [5, 2, 5],
			name: "2nd Inversion"
		},	
		{ 
			value: [2, 5, 4],
			name: "3rd Inversion"
		}]

});