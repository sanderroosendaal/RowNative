export function userSignIn() {
  console.log('signing in')
  return {
    type: 'SIGN_IN',
  }
}

export function finishIntro() {
  console.log('finishing intro')
  return {
    type: 'FINISH_INTRO'
  }
}
