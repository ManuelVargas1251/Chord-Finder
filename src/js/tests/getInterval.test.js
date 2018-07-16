const getInterval = require('../getInterval')

test('return interval between notes', () => {
    expect(getInterval(5, 9))
        .toEqual(5)
})
