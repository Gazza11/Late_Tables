import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Linking, FlatList} from 'react-native';


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

  const a = info.webAddressHome

  return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(info.webAddressHome)}>
      {info.name}
      </Text>  
      <Text>
        {info.name}
        {info.webAddressHome}
      </Text>
      {/* <FlatList
          info={info}
          keyExtractor={item  => item.id}
          renderItem={ renderItem }
        /> */}
      <StatusBar style="auto" />
    </View>
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
