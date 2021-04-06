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
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onChange = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.change(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onPlayGame = function () {
  api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onError)
}
let currentPlayer = 'X'
const onBoardClick = function () {
  // const cells = $('#board div').toArray()
  // console.log(cells)
  // get the position the player chose on the board by the id attribute
  const index = event.target.id
  // figure out whos turn it is
  const cell = $(event.target)
  // use jquery to add the player to the html board

  if (cell.text() === '') {
    cell.text(currentPlayer)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  } else {
    ui.onBoardClickSuccess()
  }
  if (currentPlayer === 'X') {
    $('#game-message').text('Player X. Your Turn!')
  } else {
    $('#game-message').text('Player O. Your Turn!')
  }

  const value = $(event.target).text()

  // then pass the index and player to the boardClick function
  // so it can send that data to the API
  api.boardClick(index, value)
    .then(ui.onBoardClickSuccess)
    .catch(ui.onError)
}

// export functions for app.js to aquire it
module.exports = {
  onSignUp,
  onSignIn,
  onChange,
  onSignOut,
  onPlayGame,
  onBoardClick
}
