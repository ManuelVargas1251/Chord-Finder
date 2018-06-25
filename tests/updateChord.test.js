const updateChord = require('../src/js/updateChord')
// const getNoteId = require('../src/js/getNoteId')
// const getUserIntervals = require('../src/js/getUserIntervals')
const userChord = ['C', 'E', 'G', 'B']

test('return chord name from chord notes', () => {
  expect(updateChord(userChord))
    .toEqual('C Major 7')
})



// test('return intervals from user chord', () => {
//   expect(getUserIntervals(['E', 'G#', 'B'], _alphabet))
//     .toEqual([5, 4])
// })

// expect(getUserIntervals(['E', 'G#', 'B'], _alphabet))
// .toEqual([5, 4])

// expect(getChord(['C', 'E', 'G', 'B'], [5, 4, 5]))
// .toEqual('C Major 7')

// expect(getNoteId('C'))
// .toEqual('0')