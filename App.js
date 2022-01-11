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
import WorkoutScreen from './Workout'

import rootReducer from './store/store'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)


const Stack = createNativeStackNavigator();

/*
  Getting isSignedIn directly from the store, defined in './store/userReducer.js'
  */
const state = store.getState()
const isSignedIn = state.userReducer.isSignedIn


export default class App extends React.Component {
  render() {
  return (
      isSignedIn ? (
        <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Workout" component={WorkoutScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      ) : (
        <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      )
  );
}
}
