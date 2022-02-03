import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

import theme from '../theme'

function SignUpOne() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')

  return (
    <View style={theme.container}>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder="First Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => setFirstName(value)}
      />
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        onChangeText={(value) => setLastName(value)}
      />
    </View>
  )
}

export default SignUpOne
