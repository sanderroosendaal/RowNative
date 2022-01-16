import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Homescreen'
import ProfileScreen from './screens/Profilescreen'
import SettingsScreen from './screens/Settingsscreen'
import SignInScreen from './screens/Signinscreen'
import SignUpScreen from './screens/Signupscreen'
import WelcomeScreen from './screens/WelcomeScreen'
import WorkoutScreen from './screens/Workout'
import SplashScreen from './screens/Splashscreen'

import rootReducer from './store/store'

import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'

const Stack = createNativeStackNavigator()

function BeginScreen() {
  const workouts = useSelector((state) => state.workoutReducer.workouts)
  const user = useSelector((state) => state.userReducer)
  if (workouts.isLoading) {
    return <SplashScreen />
  }

  if (user.isSignedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details">
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

function App() {
  return (
    <Provider store={store}>
      <BeginScreen />
    </Provider>
  )
}

export default App
