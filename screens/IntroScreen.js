import React, { Component } from 'react'
import { View, Text, StatusBar, Image, SafeAreaView } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

import { useDispatch } from 'react-redux'

import logo from '../assets/icon.png'
import theme from '../theme'

import finishIntro from '../actions'

const slides = [
  {
    key: 'one',
    title: 'Rowing Data Analysis',
    text: 'Free Data and Analysis.\nFor Rowers. By Rowers.',
    image: require('../assets/gavirate.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Rowing Log Book',
    text: 'Track all your workouts, indoor and on the water.\nMake a plan. Track progress. Train smart.',
    image: require('../assets/double.jpg'),
    backgroundColor: '#febe29',
  },
];

const dispatch = useDispatch()

const introDone = () => {
  dispatch(finishIntro())
}

export default class IntroScreen extends Component {
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.bg,
        }}>
        <SafeAreaView style={theme.slide}>
          <Text style={theme.title}>{item.title}</Text>
          <Image source={item.image} style={theme.image} />
          <Text style={theme.introtext}>{item.text}</Text>
        </SafeAreaView>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    introDone();
  }
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        bottomButton
        showSkipButton
        showPrevButton
        />
    )
  }
}
