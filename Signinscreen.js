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

import { useDispatch, useSelector } from "react-redux";

import theme from './theme'

import userSignIn from './actions'

function SignInScreen () {
   const [user, setUser ] = useState('')
   const [password, setPassword ] = useState('')
   const dispatch = useDispatch();


   const login = () => {
         dispatch(userSignIn())
         console.log('User:', user)
         console.log('Password', password)
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

export default SignInScreen
