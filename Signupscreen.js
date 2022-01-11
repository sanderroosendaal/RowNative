import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native'

import logo from './assets/icon.png';



class SignUpScreen extends Component {
  gotoSignUpForm () {
    console.log("Sign Up Form requested")
  }
  gotoSignInForm() {
    console.log("Sign In Form requested")
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions}>RowNative</Text>
        <TouchableHighlight
          onPress={this.gotoSignUpForm}
          underlayColor='#efefef'
          style={styles.button}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.gotoSignInForm}
          underlayColor='#efefef'
          style={styles.button}
        >
          <Text style={styles.text}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SignUpScreen


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
