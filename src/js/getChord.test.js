const getChord = require('./getChord').getChord

test('return interval between notes', () => {
    expect(getChord(['C', 'E', 'G'], [5, 4]))
        .toEqual('C Major')

    expect(getChord(['C', 'Eb', 'G'], [4, 5]))
        .toEqual('C Minor')

    expect(getChord(['E', 'G', 'C'], [4, 6]))
        .toEqual('C 1st Inversion')

    expect(getChord(['G', 'C', 'E'], [6, 5]))
        .toEqual('C 2nd Inversion')

    expect(getChord(['C', 'E', 'G', 'B'], [5, 4, 5]))
        .toEqual('C Major 7')
})
