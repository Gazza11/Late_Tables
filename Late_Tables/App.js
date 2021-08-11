import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Linking, FlatList, SafeAreaView, Image} from 'react-native';


export default function App() {

  const [info, setInfo] = useState([])

  const getRestaurants = async () => {
    try{
      const response = await fetch('http://localhost:8080/restaurants');
      const json = await response.json();
      setInfo(json)
      console.log(info)
      console.log("test")
    }
    catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    getRestaurants()
  },[])


  // const item = ({username}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.username}>{username}</Text>
  //   </View>
  // )

  // const renderItem = ({ item }) => (
  //   <Item username={item.username }/>
  // )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={info}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
        <View>
          <Text style={styles.items}>{item.name}</Text>
          <Image 
            source={{
              width: 300,
              height: 100,
              borderRadius: "10%",
              uri: item.mainImage}}
          ></Image>
        </View>
        
        }
        
      ></FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items: {
    fontSize: 20
  }
});
