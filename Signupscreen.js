import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native'

import logo from './assets/icon.png';

import theme from './theme'

class SignUpScreen extends Component {
  gotoSignUpForm () {
    console.log("Sign Up Form requested")
  }
  gotoSignInForm() {
    console.log("Sign In Form requested")
  }
  render() {
    return (
      <View style={theme.container}>
        <Text style={[{alignSelf: 'center'},theme.instructions]}>Sign Up Screen</Text>
      </View>
    )
  }
}

export default SignUpScreen
