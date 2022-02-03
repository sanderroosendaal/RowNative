import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { useDispatch } from 'react-redux'
import * as myActions from '../actions'

import SignUpOne from './Signupone'
import SignUpTwo from './Signuptwo'


import theme from '../theme'

function MultiStepForm(props) {
  const [page, setPage] = useState(parseInt(props.page))
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()

  const registerUser = () => {
    console.log('Registering user')
    const payload = {
      firstName: {firstName},
      lastName: {lastName}
    }
    dispatch(myActions.registerUser(payload))
  }

  const steps = [
    { key: 'SignUpOne',
      screen: SignUpOne,
      props: {
        user,
        firstName,
        lastName,
        email,
        setUser,
        setFirstName,
        setLastName,
        setEmail
      }
    },
    {
      key: 'SignUpTwo',
      screen: SignUpTwo,
      props: {
        checked,
        setChecked
      }
    }
  ]

  return (
    <View>
      {React.createElement(steps[page].screen,steps[page].props)}
      { page > 0 && <TouchableOpacity style={theme.button} onPress={() => setPage(page - 1)}>
        <Text style={theme.buttontext}> Previous </Text>
      </TouchableOpacity>}
      { page < steps.length - 1 && <TouchableOpacity style={theme.button} onPress={() => setPage(page + 1)}>
        <Text style={theme.buttontext}> Next </Text>
      </TouchableOpacity>}
      { page === steps.length - 1 && <TouchableOpacity style={theme.button} onPress={() => registerUser()}>
        <Text style={theme.buttontext}> Accept </Text>
      </TouchableOpacity>}
    </View>
  )
}

function SignUpScreen() {
  return (
    <View style={theme.container}>
      <MultiStepForm
        page="0"
      />
    </View>
  )
}

export default SignUpScreen
