import React, {useState, useEffect, useContext} from "react"
import{
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Touchable,
    ColorPropType,
    ScrollView,
    Linking,
    Switch
} from "react-native"

import { icons, SIZES, COLORS} from "../constants"
import Accordion from 'react-native-collapsible/Accordion'
import * as Location from 'expo-location'
import { Colors } from "react-native/Libraries/NewAppScreen"


const Home = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    const [info, setInfo] = useState([])
    const [activeSections, setActiveSections] = useState([])

    const getRestaurants = async () => {
        try{
            const response = await fetch('http://backend-latetables.herokuapp.com/restaurants');
            const json = await response.json();
            setInfo(json)
            console.log(info[0])
        }
        catch(error){
            console.error(error)
        }
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50}}>
                <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >

                <Switch
                    trackColor={{ false: COLORS.secondary, true: "#509051"}}
                    thumbColor={isEnabled ? COLORS.primary : COLORS.primary}
                    ios_backgroundColor={COLORS.secondary}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text >Late Tables</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderRestaurantHeader = (section) => {
        return (
            <View style={styles.restaurantItem}>
                    <Image 
                        style={styles.restaurantImage}
                        source={{uri: section.mainImage}}
                    ></Image>
                    <Text style={styles.restaurantName}>{section.name}</Text>
            </View>
            
            )
        }
        
        renderRestaurantContent = (section) => {
            return (
            <View style={styles.restaurantCollapsibleInfo}>
                <View style={ styles.restaurantInfo }>
                    <Text style={styles.restaurantDesc}>{section.desc}</Text>
                    <Text style={styles.restaurantDesc}>{section.address}</Text>

                    <View style={styles.linkContainer}>
                        <Text style={styles.links}
                            onPress={() => Linking.openURL(section.webAddressHome)}
                        >Website</Text>
                        <Text style={styles.links}
                            onPress={() => Linking.openURL(section.getWebAddressMenu)}
                        >Menu</Text>
                        <Text style={styles.links}
                            onPress={() => Linking.openURL(`tel:${section.telephoneNumber.replace(/\s/g, "")}`)}
                        >{section.telephoneNumber}</Text>
                    </View>
                </View>
            </View>
            )
        }
        
        updateSections = (activeSections) => {
            setActiveSections(activeSections)
        }
    
        useEffect(() => {
            getRestaurants()
            getLocationAsync()
            },[])

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
                <Accordion
                    touchableProps={{underlayColor: "#fff"}}
                    sections={info}
                    keyExtractor={(info, index) => index.toString()}
                    renderAsFlatList={true}
                    activeSections={activeSections}
                    renderHeader={renderRestaurantHeader}
                    renderContent={renderRestaurantContent}
                    onChange={updateSections}
                />
        </SafeAreaView>
    )
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
    linkContainer: {
        minHeight: 100,
        flex: 1,
        paddingTop: 20,
        justifyContent: "space-between",
    },
    links: {
        color: COLORS.highlight,
        textDecorationLine: "underline",
        fontSize: 16,
        textAlign: "center"
    },
    restaurantCollapsibleInfo: {
        flex: 1,
        alignItems: "center",
        textAlign: "center"
    },
    restaurantDesc:{
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: "center"
    },
    restaurantHeaderStyle: {
        borderColor: COLORS.primary,
        borderWidth: 3
    },
    restaurantInfo: {
        flex: 1,
        alignItems: "center",
        width: '95%',
        borderColor: COLORS.primary,
        borderWidth: 3,
        borderTopWidth: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 8,

    },
    restaurantImage: {
        borderRadius: 10,
        width: "95%",
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

export default Home