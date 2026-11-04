const sound = require('./sound.js') // Import the sound module for testing

describe('Sound Suite', () => {
    // preload test suite
  describe('preload Suite', () => {
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
    // Restore the original global Audio constructor after each test
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

  // playNote test suite
  describe('playNote Suite', () => {
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

      try { // Attempt to play the note and catch any errors
        expect(sound.playNote(0, notes)).toBe(notes)
        expect(consoleError).toHaveBeenCalledWith(expect.any(Error))
      } finally {
        consoleError.mockRestore()
      }
    })

    test('logs an error when playback is rejected', async () => {
      const error = new Error('playback rejected')
      // Mock function that returns a rejected promise to simulate playback rejection
      const play = jest.fn(() => Promise.reject(error))
      const notes = [{ play }]
      // Spy on console.error to suppress error output during the test and verify it was called
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})

      try {
        expect(sound.playNote(0, notes)).toBe(notes)  // Ensure the function returns the notes array even when playback is rejected
        await Promise.resolve() // Wait for the promise rejection to be handled
        expect(consoleError).toHaveBeenCalledWith(error)
      } finally {
        consoleError.mockRestore()
      }
    })
  })
})
