const initialState = {
  isSignedIn: false,
}

export default function userReducer(state = initialState, action) {
  if (action.type === 'SIGN_IN') {
    return {
      isSignedIn: true,
    }
  }
  return state
}
