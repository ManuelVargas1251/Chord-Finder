const getInterval = require('../getInterval')
const getNoteId = require('../getNoteId')

test('return interval between notes', () => {
    expect(getInterval(getNoteId('F'), getNoteId('A')))
        .toEqual(5)
})
