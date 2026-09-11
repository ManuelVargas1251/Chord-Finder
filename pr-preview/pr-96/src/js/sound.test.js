const sound = require('./sound.js')

describe('playNote', () => {
  test('plays the selected note and returns the notes array', () => {
    const play = jest.fn()
    const notes = [{ play }]

    expect(sound.playNote(0, notes)).toBe(notes)
    expect(play).toHaveBeenCalledTimes(1)
  })

  test('logs an error and returns the notes array when playback fails', () => {
    const play = jest.fn(() => {
      throw new Error('playback failed')
    })
    const notes = [{ play }]
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(sound.playNote(0, notes)).toBe(notes)
    expect(consoleError).toHaveBeenCalledWith(expect.any(Error))

    consoleError.mockRestore()
  })
})

describe('preload', () => {
  const originalAudio = global.Audio
  let audioInstances

  beforeEach(() => {
    audioInstances = []
    global.Audio = jest.fn(function (source) {
      const audio = { source, preload: false }
      audioInstances.push(audio)
      return audio
    })
  })

  afterEach(() => {
    global.Audio = originalAudio
  })

  test('creates and configures an audio object for each note', () => {
    const notes = sound.preload()

    expect(global.Audio).toHaveBeenCalledTimes(_notes.length)
    expect(notes).toHaveLength(_notes.length)
    expect(audioInstances).toEqual(
      _notes.map((note, index) => ({
        source: `src/sound/mp3/${index}.mp3`,
        preload: true
      }))
    )
  })
})
