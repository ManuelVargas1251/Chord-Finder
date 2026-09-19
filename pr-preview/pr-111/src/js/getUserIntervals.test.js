const getUserIntervals = require('./getUserIntervals')

describe('getUserIntervals Suite', () => {
    test('returns an empty array for an empty chord', () => {
        expect(getUserIntervals([])).toEqual([])
    })

    test('returns an empty array for a single note', () => {
        expect(getUserIntervals(['C'])).toEqual([])
    })

    test('returns one interval for two notes', () => {
        expect(getUserIntervals(['D', 'E'])).toEqual([3])
    })

    test('returns intervals between adjacent chord notes', () => {
        expect(getUserIntervals(['E', 'G#', 'B'])).toEqual([5, 4])
    })

    test('returns intervals for a four-note chord with sharps', () => {
        expect(getUserIntervals(['F#', 'A', 'C#', 'E'])).toEqual([4, 9, 4])
    })
})