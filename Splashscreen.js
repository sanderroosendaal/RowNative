import React, { Component } from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'

import logo from './assets/icon.png';

export default class WorkoutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>RowNative</Text>
      <StatusBar style="auto" />
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
});
