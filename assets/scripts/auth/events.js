// get information from other files
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// create a function with the event parameter for onSignUp
const onSignUp = function (event) {
  // keep page from the default refresh after clicking button
  event.preventDefault()
  // select the form that will be submitted with click of button
  const form = event.target
  // creating a javascript object from the forms values
  const data = getFormFields(form)
  // pass forms data to API
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  // keep page from the default refresh after clicking button
  event.preventDefault()
  // select the form that will be submitted with click of button
  const form = event.target
  // creating a javascript object from the forms values
  const data = getFormFields(form)
  // pass forms data to API
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}


// export functions for app.js to aquire it
module.exports = {
  onSignUp,
  onSignIn
}
