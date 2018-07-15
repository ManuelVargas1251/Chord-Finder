const playNote = require('../sound')
const userChord = ['C', 'E', 'G', 'B']

test('return chord name from chord notes', () => {
  expect(sound(userChord))
    .toEqual('C Major 7')
})

