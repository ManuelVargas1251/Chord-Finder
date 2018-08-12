let playNote = require('./sound').playNote

test('return chord name from chord notes', () => {
    expect(playNote())
        .toEqual('')
})
