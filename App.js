import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/Homescreen'
import ProfileScreen from './screens/Profilescreen'
import SettingsScreen from './screens/Settingsscreen'
import SignInScreen from './screens/Signinscreen'
import SignUpScreen from './screens/Signupscreen'
import WelcomeScreen from './screens/WelcomeScreen'
import WorkoutScreen from './screens/WorkoutScreen'
import IntroScreen from './screens/IntroScreen'

import rootReducer from './store/store'

import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function WorkoutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Workouts"
        component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={WorkoutScreen}
        options={({ route }) => ({
          workout: route.params.item,
        })}
      />
    </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  )
}

function SignInScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}

function BeginScreen() {
  const user = useSelector((state) => state.userReducer)
  if (user.isSignedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen  name="Workouts" options={{ headerShown: false }} component={WorkoutStack} />
          <Tab.Screen  name="Settings" options={{ headerShown: false }} component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

  if (!user.showRealApp) {
    return <IntroScreen />
  }

  return (
    <NavigationContainer>
      <SignInScreens />
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
