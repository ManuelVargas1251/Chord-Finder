const getNoteChord = require('./getNoteChord')

describe('getNoteChord Suite', () => {
  test('returns an empty array for no note IDs', () => {
    expect(getNoteChord([])).toEqual([])
  })

  test('returns undefined for an unknown note ID', () => {
    expect(getNoteChord([12])).toEqual([undefined])
  })

  test('maps a single note ID', () => {
    expect(getNoteChord([4])).toEqual(['E'])
  })

  test('maps the boundary note IDs', () => {
    expect(getNoteChord([0, 11])).toEqual(['C', 'B'])
  })

  test('maps note IDs to note names in order', () => {
    expect(getNoteChord([0, 4, 7]))
      .toEqual(['C', 'E', 'G'])
  })

  test('maps note IDs to sharp note names', () => {
    expect(getNoteChord([1, 6, 10])).toEqual(['C#', 'F#', 'A#'])
  })

  test('preserves duplicate note IDs', () => {
    expect(getNoteChord([0, 0, 4])).toEqual(['C', 'C', 'E'])
  })
})
