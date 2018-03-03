const getUserIntervals = require('../src/js/getUserIntervals')

test('return chord name from chord notes', () => {
    expect(getUserIntervals(
        ['E', 'G#', 'B'],
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
    )).toEqual([5, 4])
})