const updateChord = require('../src/js/updateChord')

test('return chord name from chord notes', () => {
  expect(updateChord(['C', 'E', 'G','B'])).toEqual('C Major 7')
})