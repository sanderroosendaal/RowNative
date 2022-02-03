import React from 'react'
import { View, Text, TextInput } from 'react-native'

import theme from '../theme'

function SignUpOne(props) {
  return (
    <View style={theme.container}>
      <Text>First Name</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.firstName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => props.setFirstName(value)}
      />
      <Text>Last Name</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.lastName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => props.setLastName(value)}
      /><Text>Email Address</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.email}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={(value) => props.setEmail(value)}
      />
      <Text>Choose a username</Text>
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
