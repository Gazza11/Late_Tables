import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Linking, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs"
// import {Home, Alert, User} from "./screens"
import StackUtils from 'stack-utils';


export default function App() {

  useEffect(() => {
    getUsers()
  },[])

  const [info, setInfo] = useState([])

  const getUsers = async () => {
    try{
      const response = await fetch('http://localhost:8080/restaurants');
      const json = await response.json();
      setInfo(json[0])
      console.log(info)
      console.log("test")
    }
    catch(error){
      console.error(error)
    }
  }

  const item = ({username}) => (
    <View style={styles.item}>
      <Text style={styles.username}>{username}</Text>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item username={item.username }/>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}} initialRouteName = {"Home"}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Alert" component={Alert}/>
        <Stack.Screen name="User" component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
