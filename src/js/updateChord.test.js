require('es6-shim')
const updateChord = require('./updateChord')

describe('updateChord Suite', () => {
  test('returns an empty string for an empty chord', () => {
    expect(updateChord([]))
      .toEqual('')
  })

  test('returns the note for a single-note chord', () => {
    expect(updateChord(['C']))
      .toEqual('C')
  })

  test('returns chord names for supported chords', () => {
    expect(updateChord(['C', 'D#']))
      .toEqual('C Minor 3rd')

    expect(updateChord(['C', 'E', 'G', 'B']))
      .toEqual('C Major 7')

    expect(updateChord(['C', 'D#', 'G', 'A#']))
      .toEqual('C Minor 7')
  })

  test('returns names for chord inversions and omissions', () => {
    expect(updateChord(['C', 'F', 'A']))
      .toEqual('F 2nd Inversion')

    expect(updateChord(['C', 'G', 'B']))
      .toEqual('C Omit 3')
  })

  test('returns an empty string for unsupported chords', () => {
    expect(updateChord(['C', 'A', 'D']))
      .toEqual('')

    expect(updateChord(['C', 'F', 'G', 'B']))
      .toEqual('')

    expect(updateChord(['C', 'F', 'G', 'B', 'D']))
      .toEqual('')

    expect(updateChord(['C', 'F', 'G', 'B', 'F', 'G', 'B']))
      .toEqual('')
  })
})