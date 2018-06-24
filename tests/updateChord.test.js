const updateChord = require('../src/js/updateChord')
// const getNoteId = require('../src/js/getNoteId')
// const getUserIntervals = require('../src/js/getUserIntervals')
const userChord = ['C', 'E', 'G', 'B']

test('return chord name from chord notes', () => {
  expect(updateChord(userChord))
    .toEqual('C Major 7')
})