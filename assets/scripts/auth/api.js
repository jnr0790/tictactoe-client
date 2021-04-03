const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-up/`,
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/sign-in`,
    data: data
  })
}

const change = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/change-password`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/sign-out`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const playGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const boardClick = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    data: data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  change,
  signOut,
  playGame,
  boardClick
}
