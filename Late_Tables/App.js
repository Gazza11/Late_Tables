import React from 'react'
import {Text} from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/tabs'
import {Home} from './screens'

<<<<<<< HEAD
const Stack = createStackNavigator()

const App = () => {
=======
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

>>>>>>> development
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        headerShown: false
      }}
      initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Alert" component={Tabs}/>
        <Stack.Screen name="User" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App