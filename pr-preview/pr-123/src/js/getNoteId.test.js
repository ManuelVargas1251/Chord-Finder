const getNoteId = require('./getNoteId')

describe('getNoteId Suite', () => {
  test('returns undefined when the note is not found', () => {
    expect(getNoteId('T')).toBeUndefined()
  })

  test('returns the string ID for natural notes', () => {
    expect(getNoteId('C')).toEqual('0')
    expect(getNoteId('E')).toEqual('4')
    expect(getNoteId('B')).toEqual('11')
  })

  test('returns the string ID for sharp notes', () => {
    expect(getNoteId('C#')).toEqual('1')
    expect(getNoteId('A#')).toEqual('10')
  })
})
