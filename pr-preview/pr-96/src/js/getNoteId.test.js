const getNoteId = require('./getNoteId')

test('return corresponding ids from note', () => {
  expect(getNoteId('C')).toEqual('0')
})