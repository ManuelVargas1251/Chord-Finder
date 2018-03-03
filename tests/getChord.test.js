const getChord = require('../src/js/getChord')

test('return chord name from chord notes', () => {
  expect(getChord(['C', 'E', 'G','B'], [5,4,5])).toEqual('C Major 7')
})