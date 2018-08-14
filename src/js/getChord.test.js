const getChord = require('./getChord').getChord

test('return interval between notes', () => {
    expect(getChord(['C','E','G'], [5,4]))
        .toEqual('C Major')
})
