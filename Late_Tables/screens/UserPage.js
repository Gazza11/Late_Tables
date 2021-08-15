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

    useEffect (() => {
        getUser()
    },[])

    const [user, setUser] = useState([])

const getUser = async () => {
    try{
        const response = await fetch('https://backend-latetables.herokuapp.com/users');
        const json = await response.json();
        setUser(json)
    }
    catch(error){
        console.error(error)
    }
    console.log(user)
}



    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.userPageStyle}>
                <Text>Name: {user[0].name}</Text>
                <Text>Username: {user[0].username}</Text>
                <Text>Email: {user[0].email}</Text>
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
        justifyContent: "center",
    },
});

export default UserPage