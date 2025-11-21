import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LearnScreen from './screens/LearnScreen'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Learn" component={LearnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
