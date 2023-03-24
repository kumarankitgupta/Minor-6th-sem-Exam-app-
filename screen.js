import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home'
import Profile from './profile'
import Login from './login'
import Sign from './signin'
const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();

export const LoginScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" 
        component={Profile} />
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export const LogoutScreen = ({}) => {
  return (
    <NavigationContainer>
      <Stack2.Navigator>
      <Stack2.Screen
          name="Login"
          component={Login}//comments
          options={{ headerShown: false }}
        />
        <Stack2.Screen
          name="Sign"
          component={Sign}
          options={{ headerShown:false }}
          
        />
      </Stack2.Navigator>
    </NavigationContainer>
  )
}
export default LoginScreen;
const styles = StyleSheet.create({})