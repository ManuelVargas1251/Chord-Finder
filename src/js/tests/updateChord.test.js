const updateChord = require('../updateChord')
// const getInterval = require('../getInterval')
// const getNoteId = require('../src/js/getNoteId')
// const getUserIntervals = require('../src/js/getUserIntervals')
const major7Chord = ['C', 'E', 'G', 'B']
const minor7Chord = ['C', 'D#', 'G', 'A#']
const inversionChord = ['C', 'F', 'A']
const morethan5Chord = ['C', 'G', 'B']
const emptyChord = ['C']

test('return chord name from chord notes', () => {
  expect(updateChord(major7Chord))
    .toEqual('C Major 7')

  expect(updateChord(minor7Chord))
    .toEqual('C Minor 7')

  expect(updateChord(emptyChord))
    .toEqual('C')

  expect(updateChord(inversionChord))
    .toEqual('F 2nd Inversion')

  expect(updateChord(morethan5Chord))
    .toEqual('')
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