import React, { Component } from 'react'
import { View, Text, StatusBar, Image, themeheet } from 'react-native'

import logo from './assets/icon.png';
import theme from './theme'

export default class WorkoutScreen extends Component {
  render() {
    return (
      <View style={theme.container}>
      <View style={{flex:1, justifyContent: 'center'}}>
      <Image source={logo} style={theme.logo} />
      <Text style={[{alignSelf:'center'},theme.instructions]}>RowNative</Text>
      </View>
      <StatusBar style="auto" />
      </View>
    )
  }
}
