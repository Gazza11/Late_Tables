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
import { sin } from "react-native-reanimated"
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
                    source={{
                    width: "90%",
                    height: 100,
                    uri: section.mainImage}}
                ></Image>
                <Text style={styles.items}>{section.name}</Text>
            </View>
            )
        }
        
        renderRestaurantContent = (section) => {
            return (
            <View>
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
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Accordion
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
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    restaurantItem: {
        flex: 1,
        alignItems: 'center',
    }
})

export default Home