import React, {useContext, useState, useEffect} from 'react'
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import MapView from 'react-native-maps'
import Marker from 'react-native-maps'
import * as Location from 'expo-location'

const Map = () => {

    const [info, setInfo] = useState([])
    const [location, setLocation] = useState(null)
    const [locationString, setLocationString] = useState("loading")

    async function getLocationAsync () {
    
        const {status} = await Location.requestForegroundPermissionsAsync()
        if (status === 'granted') {
        
        let temp = await Location.getCurrentPositionAsync()
        await setLocationString(JSON.stringify(temp))
        await setLocation(temp)
        
        } else {
        throw new Error('location permission not granted')
        }
        console.log(status)
        console.log(JSON.stringify(locationString))

    }

    const getRestaurants = async () => {
        try{
            const response = await fetch('http://backend-latetables.herokuapp.com/restaurants');
            const json = await response.json();
            setInfo(json)
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        getRestaurants()
        getLocationAsync()
        },[])



    return (
        <SafeAreaView style={styles.container}>
        {location ? 
            <MapView style={styles.map}
            initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
                zoom: 5,
            }} 
            >
            {info.map(restaurant => (
                <MapView.Marker 
                    coordinate={{latitude: parseFloat(restaurant.latitude), longitude: parseFloat(restaurant.longitude)}}
                    title={restaurant.name}
                    description={restaurant.desc}
                    key={restaurant.id}
                />
            ))}
            </MapView>
            : <Text>Loading</Text>
        }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: 500,
        width: "80%"
    }
});

export default Map