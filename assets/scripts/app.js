'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-game').hide()
  $('#new-game').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChange)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#play-game').on('click', authEvents.onPlayGame)
  $('#board div').on('click', authEvents.onBoardClick)
})
