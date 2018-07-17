
test('return chord name from chord notes', () => {
    let playNote = require('./sound').playNote

    expect(playNote('0'))
        .toEqual('')
})
