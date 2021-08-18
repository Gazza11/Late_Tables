import React, {useState, useEffect, useContext} from "react"
import{
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    Linking,
    Switch,
    Platform
} from "react-native"

import { icons, SIZES, COLORS} from "../constants"
import Accordion from 'react-native-collapsible/Accordion'
import * as Location from 'expo-location'
import DropDownPicker from "react-native-dropdown-picker"
import * as Notifications from 'expo-notifications'

const Home = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [location, setLocation] = useState(null)
    const [locationString, setLocationString] = useState("loading")

    const[reservations, setReservations] = useState([])

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

    // Notifications Code



    askPermissions = async () => {
        console.log("Inside permission")
        const { status: existingStatus} = await Notifications.requestPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== "granted"){
            return false
        }
        return true
    }

    sendNotificationImmediately = async () => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            })
        })
        let notificationId = await Notifications.scheduleNotificationAsync({
            content: {
            title: reservations[0].restaurant.name,
            body: `Reservation available at ${reservations[0].time}, for ${reservations[0].numberOfGuests} people. Call now ${reservations[0].restaurant.telephoneNumber}` 
            
        },
        
            trigger: null
        })
        let notificationId2 = await Notifications.scheduleNotificationAsync({
            content: {
            title: reservations[1].restaurant.name,
            body: `Reservation available at ${reservations[1].time}, for ${reservations[1].numberOfGuests} people. Call now ${reservations[1].restaurant.telephoneNumber}` 
        },
            trigger: {seconds: 20}
        })

        console.log(notificationId)
    }

    // Set up for restaurant states and filtering states.
    const [info, setInfo] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        {label: 'See All', value: ""},
        {label: 'Japanese', value: 'JAPANESE'},
        {label: 'Italian', value: 'ITALIAN'},
        {label: 'Lebanese', value: 'LEBANESE'},
        {label: 'Spanish', value: 'SPANISH'},
        {label: 'Mexican', value: 'MEXICAN'},
        {label: 'British', value: 'BRITISH'}
    ])
    const [activeSections, setActiveSections] = useState("")

    const getRestaurants = async () => {
        try{
            const response = await fetch('http://backend-latetables.herokuapp.com/restaurants');
            const json = await response.json();
            setInfo(json)
            setFilteredRestaurants(json)
        }
        catch(error){
            console.error(error)
        }
    }

    const getReservations = async () => {
        try{
            const response = await fetch('http://backend-latetables.herokuapp.com/reservations');
            const json = await response.json();
            setReservations(json)
        }
        catch(error){
            console.error(error)
        }
    }

    function filterRestaurants(cuisine) {
        if(cuisine){
            let filteredList = info.filter(rest => rest.cuisine.includes(cuisine))
            setFilteredRestaurants(filteredList)
            console.log(value)
        } else if (cuisine === ""){
            setFilteredRestaurants(info)
        }
        
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, zIndex:1}}>
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
                    <View style={{width: "75%"}}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownMaxHeight={200}
                        />
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
                        source={icons.star}
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
                    <View style={{flexDirection: 'row'}}>
                    {[1, 2, 3, 4, 5].map((price) => (
                        <Text
                            key={price}
                            style={{
                                color: (price <= section.price) ? COLORS.black : COLORS.darkgray,
                                fontSize: 22
                            }}
                        >£</Text>
                    ))}
                    </View>
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
            askPermissions()
            getRestaurants()
            getLocationAsync()
            getReservations()
            },[])

        // When search term changes, filteredRestaurants is run with the new value. Updating the list.
        useEffect(() => {
            filterRestaurants(value)
        }, [value])

        // Use effect for checking notification and whether it should be sent
        useEffect(() => {
            if(isEnabled){
                sendNotificationImmediately()
            }
        }, [isEnabled])

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
                <Accordion
                    touchableProps={{underlayColor: "#fff"}}
                    sections={filteredRestaurants}
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
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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
        textAlign: "center",
        height: 257
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
        height: 180,
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