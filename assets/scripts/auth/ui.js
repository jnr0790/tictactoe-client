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
  }, 5000)
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  $('#message').text('Account was successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(`${response.user.email} is signed in!`)
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
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
  }, 5000)
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
  }, 5000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play-game').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

const onPlayGameSuccess = function (response) {
  $('#message').text('Have Fun!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#board').show()
}

module.exports = {
  onError,
  onSignUpSuccess,
  onSignInSuccess,
  onChangeSuccess,
  onSignOutSuccess,
  onPlayGameSuccess
}
