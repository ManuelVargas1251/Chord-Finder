const getAlphabetFromRoot = require('../src/js/getAlphabetFromRoot')

test('return musical alphabet starting with the 0 index of the chord', () => {
    expect(getAlphabetFromRoot(['E', 'G', 'B'])).toEqual(
        [
            "E",
            ["F", "E#"],
            ["F#", "Gb"],
            "G",
            ["G#", "Ab"],
            "A",
            ["A#", "Bb"],
            ["B", "Cb"],
            ["C", "B#"],
            ["C#", "Db"],
            "D",
            ["D#", "Eb"]
        ]
    )
})