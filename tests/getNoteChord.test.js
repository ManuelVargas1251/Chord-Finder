const getNoteChord = require('../src/js/getNoteChord');

test('return corresponding notes from ids', () => {
  expect(getNoteChord([0,4,7])).toBe(['C','E','G']);
});