import React from 'react'
import { View, TextInput } from 'react-native'

import theme from '../theme'

function SignUpOne(props) {
  return (
    <View style={theme.container}>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.firstName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => props.setFirstName(value)}
      />
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.lastName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => props.setLastName(value)}
      />
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.user}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => props.setUser(value)}
      />
    </View>
  )
}

export default SignUpOne
