import React, { Component, useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import {
   View,
   Text,
   themeheet,
   TouchableHighlight,
   TextInput,
   TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import theme from './theme'


function SignInScreen () {
   const [user, setUser ] = useState('')
   const [password, setPassword ] = useState('')
   const [isSignedIn, setSignedIn ] = useState(false)

   useEffect(() => {
         console.log(user,password,isSignedIn)
   })

   const login = () => {
         setSignedIn(true)
         console.log('logged in')
   }

   return (
         <View style = {theme.container}>
         <TextInput style = {theme.input}
         underlineColorAndroid = "transparent"
         placeholder = "user name"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {value => setUser(value)}/>

         <TextInput style = {theme.input}
         secureTextEntry={true}
         underlineColorAndroid = "transparent"
         placeholder = "Password"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {value => setPassword(value)}/>

         <TouchableOpacity
         style = {theme.button}
         onPress = {() => login()}>
         <Text style = {theme.buttontext}> Sign In </Text>
         </TouchableOpacity>
         </View>
      )
   }



const mapStateToProps = (state) => ({
  isSignedIn: state.userReducer.isSignedIn
})

export default connect(mapStateToProps) (SignInScreen)
