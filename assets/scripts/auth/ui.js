const store = require('./../store')

// onError function for message when form doesn't go through properly
const onError = function (err) {
  // log any errors that occur
  console.error(err)

  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  setTimeout(() => {
    // clear the deltext messages
    $('#message').text('')
    // remove the success class
    $('#message').removeClass('failure')
  }, 3000)
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`${response.user.email} is signed in!`)
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#play-game').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onChangeSuccess = function (response) {
  $('#message').text('You sucessfully changed your password!')
  $('#message').addClass('success')
  setTimeout(() => {
  // clear the deltext messages
    $('#message').text('')
    // remove the success class
    $('#message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('You signed out!')
  $('#message').addClass('success')
  setTimeout(() => {
  // clear the deltext messages
    $('#message').text('')
    // remove the success class
    $('#message').removeClass('success')
  }, 3000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-game').hide()
  $('#new-game').hide()
  $('#game-message').hide()
  $('#player-message').hide()
  $('#board').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

const onPlayGameSuccess = function (response) {
  store.game = response.game
  $('#game-message').text('Player X. Your Turn!')
  $('#board').show()
  $('#game-message').show()
  $('#player-message').show()
  $('.game-cell').empty()
}

const onBoardClickSuccess = function () {
  $('#player-message').text('Spot Taken!')
  $('#player-message').addClass('success')
  setTimeout(() => {
    $('#player-message').text('')
    $('#player-message').removeClass('success')
  }, 3000)
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangeSuccess,
  onSignOutSuccess,
  onPlayGameSuccess,
  onBoardClickSuccess
}
