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

import { connect } from 'react-redux'


class WelcomeScreen extends Component {
  gotoSignUpForm = () => {
    console.log("Sign Up Form requested")
    const { navigate } = this.props.navigation
    navigate('SignUp')
  }
  gotoSignInForm = () => {
    const { navigate } = this.props.navigation
    navigate('SignIn')
  }
  render() {
    return (
      <View style={theme.container}>
        <Image source={logo} style={theme.logo} />
        <Text style={[{alignSelf: 'center'},theme.instructions]}>RowNative</Text>
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



const mapStateToProps = (state) => ({
  isSignedIn: state.userReducer.isSignedIn
})

export default connect(mapStateToProps) (WelcomeScreen)
