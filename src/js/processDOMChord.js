const sound = require('./sound.js')
const updateChord = require('./updateChord.js')

function processDOMChord(newNoteId, userChordIds) {

    // define bool for testing duplicate note entries
    // when key is clicked, save note in newNote
    let isDuplicate = false

    // if newNote is already in the array, remove both
    userChordIds.forEach((element, i) => {
        if (newNoteId === element) {
            isDuplicate = true
            userChordIds.splice(i, 1)
        }
    })

    // push to array if no duplicate found
    if (isDuplicate === false) {
        // play the audio
        sound.playNote(newNoteId)

        //push the note into the array
        userChordIds.push(newNoteId)
    }
    console.log('new note: ' + userChordIds)

    // sort and update array
    // explicit sort bc default implementation does not sort double digits correctly
    userChordIds.sort((a, b) => {
        return a - b
    })

    //convert note ids to note names
    userChord = getNoteChord(userChordIds)
    console.log('userChord: ' + userChord)

    // run the chord update
    $('.chord').text(updateChord(userChord, getNoteId))
}

module.exports = processDOMChord