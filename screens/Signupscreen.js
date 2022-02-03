import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import SignUpOne from './Signupone'
import SignUpTwo from './Signuptwo'


import theme from '../theme'

const steps = [
  { name: SignUpOne, component: <SignUpOne /> },
  { name: SignUpTwo, component: <SignUpTwo /> },
]

function MultiStepForm(props) {
  const [page, setPage] = useState(parseInt(props.page))
  const [firstName, setFirstName] = useState('First Name')
  const [lastName, setLastName] = useState('Last Name')
  const [user, setUser] = useState('')
  const [checked, setChecked] = useState(false)

  const registerUser = () => {
    console.log('Registering user')
    payload = {
      firstName: {firstName},
      lastName: {lastName}
    }
  }

  return (
    <View>
      { page === 1 && <SignUpOne
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        />}
      { page === 2 && <SignUpTwo
        checked={checked}
        setChecked={setChecked}
        />}
      { page != 2 && <TouchableOpacity style={theme.button} onPress={() => setPage(page + 1)}>
        <Text style={theme.buttontext}> Next </Text>
      </TouchableOpacity>}
      { page === 2 && <TouchableOpacity style={theme.button} onPress={() => setPage(page - 1)}>
        <Text style={theme.buttontext}> Previous </Text>
      </TouchableOpacity>}
      { page === 2 && <TouchableOpacity style={theme.button} onPress={() => registerUser()}>
        <Text style={theme.buttontext}> Accept </Text>
      </TouchableOpacity>}
    </View>
  )
}

function SignUpScreen() {
  return (
    <View style={theme.container}>
      <MultiStepForm
        page="1"
        />
    </View>
  )
}

export default SignUpScreen
