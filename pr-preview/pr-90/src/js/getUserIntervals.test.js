const getUserIntervals = require('./getUserIntervals')

test('return chord name from chord notes', () => {
    expect(getUserIntervals(['E', 'G#', 'B'], _alphabet))
        .toEqual([5, 4])
})