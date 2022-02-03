const initialState = {
  isSignedIn: false,
  showRealApp: false,
}

export default function userReducer(state = initialState, action) {
  if (action.type === 'SIGN_IN') {
    return {
      isSignedIn: true,
    }
  }
  if (action.type === 'FINISH_INTRO') {
    return {
      showRealApp: true,
    }
  }
  if (action.type === 'REGISTER_USER') {
    // Do something with payload
    console.log(action.payload)
    console.log(action.payload.firstName)
    return {
      isSignedIn: true,
    }
  }
  return state
}
