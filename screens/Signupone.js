import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'


import theme from '../theme'

function SignUpOne(props) {

  const changeEmail = (value) => {
    console.log(value)
    props.setEmail(value)
    console.log(props.isFieldInError('email'))
  }

  return (
    <View style={theme.container}>
      <Text>First Name</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.firstName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        value={props.firstName}
        onChangeText={props.setFirstName}
      />
      <Text>Last Name</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.lastName}
        placeholderTextColor="#9a73ef"
        autoCapitalize="words"
        value={props.lastName}
        onChangeText={props.setLastName}
      /><Text>Email Address</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.email}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={props.email}
        onBlur={(e) => changeEmail(e.target.value)}
        onChangeText={changeEmail}
      />
      {props.isFieldInError('email') && <Text>{ props.getErrorsInField('email') }</Text>}
      <Text>Choose a username</Text>
      <TextInput
        style={theme.input}
        underlineColorAndroid="transparent"
        placeholder={props.user}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={props.user}
        onChangeText={props.setUser}
      />
    </View>
  )
}

export default SignUpOne
