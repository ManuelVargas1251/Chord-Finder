const sound = require('./sound.js') // Import the sound module for testing

describe('playNote', () => {
  test('plays the selected note and returns the notes array', () => {
    const play = jest.fn()  // Mock function to simulate note playback
    const notes = [{ play }]  // Array containing a single note with the mocked play function

    expect(sound.playNote(0, notes)).toBe(notes)
    expect(play).toHaveBeenCalledTimes(1)
  })

  test('logs an error and returns the notes array when playback fails', () => {
    const play = jest.fn(() => {  // Mock function that throws an error to simulate playback failure
      throw new Error('playback failed')
    })
    const notes = [{ play }]
    // Spy on console.error to suppress error output during the test and verify it was called
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(sound.playNote(0, notes)).toBe(notes)
    expect(consoleError).toHaveBeenCalledWith(expect.any(Error))

    consoleError.mockRestore()  // Restore the original console.error implementation after the test
  })
})

describe('preload', () => {
  const originalAudio = global.Audio  // Store the original global Audio constructor to restore it after tests
  let audioInstances  // Array to store instances of mocked audio objects

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

    expect(global.Audio).toHaveBeenCalledTimes(_notes.length)  // Ensure an audio object was created for each note
    expect(notes).toHaveLength(_notes.length)  // Ensure the returned notes array has the correct length
    expect(audioInstances).toEqual(
      _notes.map((_, index) => ({
        source: `src/sound/mp3/${index}.mp3`,
        preload: 'auto'
      }))
    )
  })
})
