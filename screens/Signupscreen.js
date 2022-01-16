import React, { Component } from 'react'
import { View, Text } from 'react-native'

import theme from '../theme'

class SignUpScreen extends Component {
  render() {
    return (
      <View style={theme.container}>
        <Text style={[{ alignSelf: 'center' }, theme.instructions]}>
          Sign Up Screen
        </Text>
      </View>
    )
  }
}

export default SignUpScreen
