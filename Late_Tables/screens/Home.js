import React, {useState, useEffect} from "react"
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
    Linking
} from "react-native"

import { icons, SIZES, COLORS, FONTS } from "../constants"

import Accordion from 'react-native-collapsible/Accordion'


const Home = () => {


    const [info, setInfo] = useState([])
    const [activeSections, setActiveSections] = useState([])

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
                <Image
                    source={icons.star}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30
                    }}
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
                        <Text style={{...FONTS.h3 }}>Late Tables</Text>
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
                <Text>{section.desc}</Text>
                <Text>{section.address}</Text>
                <Text>{section.telephoneNumber}</Text>
            </View>
            )
        }
        
        updateSections = (activeSections) => {
            setActiveSections(activeSections)
        }
    
        useEffect(() => {
            getRestaurants()
            },[])

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <ScrollView>
                <Accordion
                    touchableProps={{underlayColor: "#fff"}}
                    sections={info}
                    activeSections={activeSections}
                    renderHeader={renderRestaurantHeader}
                    renderContent={renderRestaurantContent}
                    onChange={updateSections}
                />
            </ScrollView>
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

export default Home