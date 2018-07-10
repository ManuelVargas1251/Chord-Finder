const getInterval = require('../getInterval')
const getNoteId = require('../get')

test('return interval between notes', () => {
    expect(getInterval(getNoteId('F'), getNoteId('A')))
        .toEqual(5)
})
