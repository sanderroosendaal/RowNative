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

const Stack = createNativeStackNavigator();

let isSignedIn = true

function App() {
  return (
      isSignedIn ? (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      )
  );
}

export default App
