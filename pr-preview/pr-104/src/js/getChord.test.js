const getChord = require('./getChord').getChord

describe('getChord', () => {
    test('returns chord names for supported note and interval combinations', () => {
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

    test('returns an empty string when no notes are selected', () => {
        expect(getChord([], [])).toEqual('')
    })

    test('returns the selected note when no intervals are present', () => {
        expect(getChord(['C'], [])).toEqual('C')
    })

    test('returns an empty string when the interval combination is unsupported', () => {
        const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {})

        try {
            expect(getChord(['C', 'C#', 'D'], [2, 2])).toEqual('')
            expect(consoleWarn).toHaveBeenCalledWith('no chord defined')
        } finally {
            consoleWarn.mockRestore()
        }
    })
})
