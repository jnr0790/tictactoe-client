// get information from other files
const store = require('./../store')
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

let currentPlayer = 'X'
const onPlayGame = function () {
  currentPlayer = 'X'
  api.playGame()
    .then(ui.onPlayGameSuccess)
    .catch(ui.onError)
}

const onBoardClick = function () {
  // const cells = $('#board div').toArray()
  // console.log(cells)
  // get the position the player chose on the board by the id attribute
  const index = event.target.id
  // figure out whos turn it is
  const cell = $(event.target)
  // use jquery to add the player to the html board

  if (store.game.over === true) {
    $('#player-message').text('Stop clicking. The game\'s over')
    setTimeout(() => {
      $('#player-message').text('')
    }, 2000)
    return
  }

  if (cell.text() === '') {
    cell.text(currentPlayer)
    store.game.cells[index] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  } else {
    ui.onBoardClickSuccess()
  }

  const value = $(event.target).text()

  if (currentPlayer === 'X') {
    $('#game-message').text('Player X. Your Turn!')
  } else {
    $('#game-message').text('Player O. Your Turn!')
  }
  // function to check for an empty string
  const emptyArrayCheck = (val) => val !== ''
  // running function in .every() to check if every index is filled or not
  const tieGame = store.game.cells.every(emptyArrayCheck)

  let winner
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') ||
      (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') ||
      (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') ||
      (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') ||
      (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') ||
      (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') ||
      (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') ||
      (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X')) {
    winner = 'X'
    store.game.over = true
    $('#game-message').text(`${winner} Wins!`)
  } else if ((store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') ||
      (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') ||
      (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') ||
      (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') ||
      (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') ||
      (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') ||
      (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') ||
      (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O')) {
    winner = 'O'
    store.game.over = true
    $('#game-message').text(`${winner} Wins!`)
  } else if (tieGame === true) {
    store.game.over = true
    $('#game-message').text('Tied!')
  }

  // then pass the index and player to the boardClick function
  // so it can send that data to the API
  api.boardClick(index, value)
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
