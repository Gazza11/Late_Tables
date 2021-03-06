import React from 'react'
import {Text} from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/tabs'



const Stack = createStackNavigator()

const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        headerShown: false
      }}
      initialRouteName={"Home"}
      >
        <Stack.Screen name="home" component={Tabs}/>
        <Stack.Screen name="Alert" component={Tabs}/>
        <Stack.Screen name="User" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App