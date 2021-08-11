import React from 'react'
import {
    View,
    Image,
    TouchableOpacity
} from "react-native"
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"
import Svg, {Path} from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'
import {Home} from "../screens"
import { COLORS, icons } from '../constants'

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                borderTopWidth: 0,
                backgroundColor: "transparent",
                elevation: 0
            }
        }} tabBar = {(props) => (
            <CustomTabBar props={props}/>
        )}>
        

        <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}