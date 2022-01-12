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
        <Image source={logo} style={theme.logo} />
        <Text style={theme.instructions}>RowNative</Text>
        <TouchableHighlight
          onPress={this.gotoSignUpForm}
          underlayColor='#efefef'
          style={theme.button}
        >
          <Text style={theme.text}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.gotoSignInForm}
          underlayColor='#efefef'
          style={theme.button}
        >
          <Text style={theme.text}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SignUpScreen
