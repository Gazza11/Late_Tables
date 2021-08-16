import React from 'react'
import{
    View,
    Text,
    Button,
    SafeAreaView
} from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Notification = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Restaurant</Text>
    </View>
)

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}/>
        <DrawerItem
            label="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}/>
    </DrawerContentScrollView>
)




const Restaurant = () => {

const Drawer = createDrawerNavigator();



    return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="All" component={Notification}/>
            </Drawer.Navigator>
    )
}

export default Restaurant