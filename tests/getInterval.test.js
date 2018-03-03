const getInterval = require('../src/js/getInterval')

test('return chord name from chord notes', () => {
    expect(getInterval(
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
        ],
        'F',
        'A')).toEqual(5)
})