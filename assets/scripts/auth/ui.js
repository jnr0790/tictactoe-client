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
  // clear the deltext messages
    $('#message').text('')
    // remove the success class
    $('#message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onError,
  onSignUpSuccess
}
