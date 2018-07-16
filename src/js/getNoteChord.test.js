const getNoteChord = require('./getNoteChord').getNoteChord

test('return corresponding notes from ids', () => {
  expect(getNoteChord([0, 4, 7])).toEqual(['C', 'E', 'G'])
})