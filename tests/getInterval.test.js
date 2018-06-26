const getInterval = require('../src/js/getInterval')
const getNoteId = require('../src/js/getNoteId')

test('return interval between notes', () => {
    expect(getInterval(getNoteId('F'), getNoteId('A')))
        .toEqual(5)
})
