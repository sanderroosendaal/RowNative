export function userSignIn() {
  return {
    type: 'SIGN_IN',
  }
}

export function finishIntro() {
  return {
    type: 'FINISH_INTRO'
  }
}

export function registerUser(payload) {
  return {
    type: 'REGISTER_USER',
    payload: payload
  }
}
