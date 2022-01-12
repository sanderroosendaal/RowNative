import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Homescreen'
import ProfileScreen from './Profilescreen'
import SettingsScreen from './Settingsscreen'
import SignInScreen from './Signinscreen'
import SignUpScreen from './Signupscreen'
import WelcomeScreen from './WelcomeScreen'
import WorkoutScreen from './Workout'
import SplashScreen from './Splashscreen'

import rootReducer from './store/store'

import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from 'redux'




const Stack = createNativeStackNavigator();

function BeginScreen () {
  const workouts = useSelector(state => state.workoutReducer.workouts)
  const user = useSelector(state => state.userReducer)
  if (workouts.isLoading) {
    return <SplashScreen />;
  }

  if (user.isSignedIn) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
      name="Details">
      {(props) => <WorkoutScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
const store = createStore(rootReducer)

function App () {
  return (
    <Provider store={store} >
    <BeginScreen />
    </Provider>
  )
}

export default App
