import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

import { useDispatch } from 'react-redux'

import theme from '../theme'

import * as myActions from '../actions'

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
]

function IntroScreen() {
  const user = useState('')
  const dispatch = useDispatch()

  const _renderItem = ({ item }) => {
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
    )
  }

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    dispatch(myActions.finishIntro())
    console.log('Intro Done')
    console.log(user.isSignedIn)
    console.log(user.showRealApp)
  }

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      bottomButton
      showSkipButton
      showPrevButton
    />
  )
}

export default IntroScreen
