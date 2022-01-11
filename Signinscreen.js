import React, { Component, useState } from 'react'
import { bindActionCreators } from 'redux'
import {
   View,
   Text,
   StyleSheet,
   TouchableHighlight,
   TextInput,
   TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'


class SignInScreen extends Component {
   updateInput = (key, value) => {
      this.setState({
         ...this.state,
         [key]: value
      })
   }

   login = (user, pass, isSignedIn) => {
      alert('user name: ' + user + ' password: ' + pass)
      this.user = ''
      this.password = ''
      // now sign in
   }
   render() {
      const { isSignedIn } = this.props

      return (
         <View style = {styles.container}>
         <TextInput style = {styles.input}
         underlineColorAndroid = "transparent"
         placeholder = "user name"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {value => this.updateInput('user', value)}/>

         <TextInput style = {styles.input}
         secureTextEntry={true}
         underlineColorAndroid = "transparent"
         placeholder = "Password"
         placeholderTextColor = "#9a73ef"
         autoCapitalize = "none"
         onChangeText = {value => this.updateInput('password', value)}/>

         <TouchableOpacity
         style = {styles.submitButton}
         onPress = {
            () => this.login(this.state.user, this.state.password, isSignedIn)
         }>
         <Text style = {styles.submitButtonText}> Submit </Text>
         </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    alignSelf: 'center',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666'
  }
});

const mapStateToProps = (state) => ({
  isSignedIn: state.userReducer.isSignedIn
})

export default connect(mapStateToProps) (SignInScreen)
