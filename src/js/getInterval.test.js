const getInterval = require('./getInterval')

describe('getInterval Suite', () => {
    test('returns one for the same note', () => {
        expect(getInterval(5, 5)).toEqual(1)
    })

    test('returns two for adjacent notes', () => {
        expect(getInterval(5, 6)).toEqual(2)
    })

    test('returns the interval between two notes', () => {
        expect(getInterval(5, 9)).toEqual(5)
    })

    test('returns the same interval when note order is reversed', () => {
        expect(getInterval(9, 5)).toEqual(5)
    })
})
