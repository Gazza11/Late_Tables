import React, {Component} from 'react'
import {StyleSheet, Text, View} from "react-native"
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { icons, SIZES, COLORS, FONTS } from "../constants"



export default class GeoLocation extends Component{
    
    state = { 
    location: {},
    errorMessage: "",
    };

    componentWillMount() {
    this._getLocation();
    }

    _getLocation = async() => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if(status !== "granted"){
        console.log("Permission not granted!")

        this.setState({ errorMessage: "Permission not granted" })
    }
    const location = await Location.getCurrentPositionAsync()

    this.setState({ location })
    console.log(location.coords.longitude)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{JSON.stringify(this.state.location)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    restaurantCollapsibleInfo: {
        flex: 1,
        
        alignItems: "center",
    },
    restaurantImage: {
        borderRadius: 10,
        width: "100%",
        height: 140,
    },
    restaurantItem: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    restaurantName: {
        fontSize: 20,
    }
})


