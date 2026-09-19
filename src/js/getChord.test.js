const getChord = require('./getChord')

describe('getChord Suite', () => {
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

    test('returns a major chord name', () => {
        expect(getChord(['C', 'E', 'G'], [5, 4]))
            .toEqual('C Major')
    })

    test('returns a minor chord name', () => {
        expect(getChord(['C', 'Eb', 'G'], [4, 5]))
            .toEqual('C Minor')
    })

    test('returns a first-inversion chord name', () => {
        expect(getChord(['E', 'G', 'C'], [4, 6]))
            .toEqual('C 1st Inversion')
    })

    test('returns a second-inversion chord name', () => {
        expect(getChord(['G', 'C', 'E'], [6, 5]))
            .toEqual('C 2nd Inversion')
    })

    test('returns a seventh chord name', () => {
        expect(getChord(['C', 'E', 'G', 'B'], [5, 4, 5]))
            .toEqual('C Major 7')
    })
})
