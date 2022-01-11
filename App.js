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

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)


const Stack = createNativeStackNavigator();

/*
  Getting isSignedIn directly from the store, defined in './store/userReducer.js'
  set if to false to see the sign in screen
  Getting isLoaded directly from the store, defined in './store/workoutReducer.js'
  set if to true to see the splash screen
  */
const state = store.getState()
const isSignedIn = state.userReducer.isSignedIn
const isLoading = state.workoutReducer.isLoading


export default class App extends React.Component {
  render() {
    if (isLoading) {
      return <SplashScreen />;
    }

    return (
      isSignedIn ? (
        <Provider store={store} >
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
        </Provider>
      ) : (
        <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      )
    );
  }
}
