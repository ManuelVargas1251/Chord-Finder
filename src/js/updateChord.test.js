const updateChord = require('./updateChord').updateChord
const getNoteId = require('./getNoteId.js') 

test('return chord name from chord notes', () => {
  expect(updateChord(['C', 'E', 'G', 'B']))
    .toEqual('C Major 7')

  expect(updateChord(['C', 'D#', 'G', 'A#']))
    .toEqual('C Minor 7')

  expect(updateChord(['C']))
    .toEqual('C')

  expect(updateChord(['C', 'F', 'A']))
    .toEqual('F 2nd Inversion')

  expect(updateChord(['C', 'D#']))
    .toEqual('Minor 3rd')

  expect(updateChord(['C', 'G', 'B']))
    .toEqual('')

  expect(updateChord(['C', 'A', 'D']))
    .toEqual('')

  expect(updateChord([]))
    .toEqual('')

  expect(updateChord(['C', 'F', 'G', 'B']))
    .toEqual('')

  expect(updateChord(['C', 'F', 'G', 'B', 'D']))
    .toEqual('')

  expect(updateChord(['C', 'F', 'G', 'B', 'F', 'G', 'B']))
    .toEqual('')
})