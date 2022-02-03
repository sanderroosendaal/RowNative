import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import logo from '../assets/icon.png'
import theme from '../theme'

class WelcomeScreen extends React.Component {
  gotoSignUpForm = () => {
    this.props.navigation.navigate('SignUp')
  }

  gotoSignInForm = () => {
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <View style={theme.container}>
        <Image source={logo} style={theme.logo} />
        <Text style={[{ alignSelf: 'center' }, theme.instructions]}>
          RowNative
        </Text>
        <TouchableHighlight
          onPress={this.gotoSignUpForm}
          underlayColor="#efefef"
          style={theme.button}
        >
          <Text style={theme.text}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.gotoSignInForm}
          underlayColor="#efefef"
          style={theme.button}
        >
          <Text style={theme.text}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.userReducer.isSignedIn,
})

export default connect(mapStateToProps)(WelcomeScreen)
