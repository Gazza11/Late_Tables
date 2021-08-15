import React from 'react'
import{
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Button,
    ColorPropType,
} from 'react-native'
import { icons, SIZES, COLORS} from "../constants"
import { useState, useEffect } from 'react'

const UserPage = () => {

    const [user, setUser] = useState([])

    useEffect (() => {
        getUser()
    },[])
    console.log(user)

const getUser = async () => {
    try{
        const response = await fetch('https://backend-latetables.herokuapp.com/users');
        const json = await response.json();
        setUser(json[0])
    }
    catch(error){
        console.error(error)
    }
    console.log(user)   
}



    return (
        <SafeAreaView style = {styles.container}>
            <View style={{ flex: 1, alignItems: 'center'}}>
                    <View
                        style={{
                            width: '50%',
                            height: '13%',
                            paddingLeft: 68,
                            paddingRight: 68,
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text >Account</Text>
                    </View>
                </View>
            <View style = {styles.userPageStyle}>
                <Text>Name: {user.name}</Text>
                <Text>Username: {user.username}</Text>
                <Text>Email: {user.email}</Text>
            </View>
            {/* <Button
                    onPress={}
                    title="Edit"
                    color= {COLORS.primary}
                    accessibilityLabel="Edit information"
                /> */}
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
    userPageStyle: {    
        flex: 1,
        alignItems: "center",
        width: '95%',
        padding: 15,
        // justifyContent: "center",
    },
});

export default UserPage