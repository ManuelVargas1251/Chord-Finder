// mocking dependencies
jest.mock('./sound.js', () => ({
  playNote: jest.fn()
}))
jest.mock('./getNoteChord.js', () => jest.fn())
jest.mock('./updateChord.js', () => jest.fn())

const sound = require('./sound.js')
const getNoteChord = require('./getNoteChord.js')
const updateChord = require('./updateChord.js')
const processDOMChord = require('./processDOMChord')

describe('processDOMChord Suite', () => {
  let text  // mock for jQuery text method

  beforeEach(() => {
    text = jest.fn()
    global.$ = jest.fn(() => ({ text }))
    jest.clearAllMocks()
  })

  test('sorts a new note, plays it, and updates the chord display', () => {
    const userChordIds = [4]
    // Indexed mock audio entries stand in for values returned by sound.preload().
    const mockAudioNotes = [undefined, undefined, undefined, undefined, 'E audio']
    getNoteChord.mockReturnValue(['C', 'E'])
    updateChord.mockReturnValue('C Major 3rd')

    processDOMChord(0, userChordIds, mockAudioNotes)

    expect(userChordIds).toEqual([0, 4])
    expect(sound.playNote).toHaveBeenCalledWith(0, mockAudioNotes)
    expect(getNoteChord).toHaveBeenCalledWith([0, 4])
    expect(updateChord).toHaveBeenCalledWith(['C', 'E'])
    expect(text).toHaveBeenCalledWith('C Major 3rd')
  })

  test('removes a duplicate note without playing it', () => {
    const userChordIds = [1, 4]
    getNoteChord.mockReturnValue(['E'])
    updateChord.mockReturnValue('C')

    processDOMChord(1, userChordIds)

    expect(userChordIds).toEqual([4])
    expect(sound.playNote).not.toHaveBeenCalled()
    expect(updateChord).toHaveBeenCalledWith(['E'])
  })

  test('accepts the highest valid note ID', () => {
    const userChordIds = []
    const mockAudioNotes = [undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined, undefined, 'B audio']
    getNoteChord.mockReturnValue(['B'])
    updateChord.mockReturnValue('B')

    processDOMChord(11, userChordIds, mockAudioNotes)

    expect(userChordIds).toEqual([11])
    expect(sound.playNote).toHaveBeenCalledWith(11, mockAudioNotes)
    expect(getNoteChord).toHaveBeenCalledWith([11])
    expect(updateChord).toHaveBeenCalledWith(['B'])
    expect(text).toHaveBeenCalledWith('B')
  })

  test('resets the chord display for an invalid note', () => {
    updateChord.mockReturnValue('')

    processDOMChord(12, [1])

    expect(updateChord).toHaveBeenCalledWith([])
    expect(text).toHaveBeenCalledWith('')
  })

  test('resets the chord display when the chord array is missing', () => {
    updateChord.mockReturnValue('')

    processDOMChord(0, undefined)

    expect(updateChord).toHaveBeenCalledWith([])
    expect(text).toHaveBeenCalledWith('')
  })
})
